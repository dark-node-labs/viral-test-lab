(function () {
  const $ = (id) => document.getElementById(id);
  if (!$('contractForm')) return;
  let report = '';

  function schemas(documentValue) {
    if (documentValue && documentValue.components && documentValue.components.schemas) {
      return documentValue.components.schemas;
    }
    return { Root: documentValue || {} };
  }

  function issues(oldDocument, newDocument) {
    const oldSchemas = schemas(oldDocument);
    const newSchemas = schemas(newDocument);
    const changes = [];
    Object.keys(oldSchemas).forEach((name) => {
      const oldSchema = oldSchemas[name] || {};
      const newSchema = newSchemas[name];
      if (!newSchema) {
        changes.push(`BREAKING: removed schema ${name}`);
        return;
      }
      const oldProperties = oldSchema.properties || {};
      const newProperties = newSchema.properties || {};
      const oldRequired = oldSchema.required || [];
      const newRequired = newSchema.required || [];
      Object.keys(oldProperties).forEach((key) => {
        if (!newProperties[key]) {
          changes.push(`BREAKING: removed property ${name}.${key}`);
        } else if (oldProperties[key].type && newProperties[key].type && oldProperties[key].type !== newProperties[key].type) {
          changes.push(`BREAKING: type changed for ${name}.${key} (${oldProperties[key].type} -> ${newProperties[key].type})`);
        } else if (Array.isArray(oldProperties[key].enum) && Array.isArray(newProperties[key].enum) && newProperties[key].enum.some((value) => !oldProperties[key].enum.includes(value))) {
          changes.push(`BREAKING: enum changed for ${name}.${key}`);
        }
      });
      newRequired.filter((key) => !oldRequired.includes(key)).forEach((key) => changes.push(`BREAKING: new required property ${name}.${key}`));
      Object.keys(newProperties).filter((key) => !oldProperties[key]).forEach((key) => changes.push(`INFO: added property ${name}.${key}${newRequired.includes(key) ? ' (required)' : ''}`));
    });
    Object.keys(newSchemas).filter((name) => !oldSchemas[name]).forEach((name) => changes.push(`INFO: added schema ${name}`));
    return changes;
  }

  $('contractForm').onsubmit = (event) => {
    event.preventDefault();
    try {
      const changes = issues(JSON.parse($('oldSchema').value), JSON.parse($('newSchema').value));
      const breaking = changes.some((item) => item.startsWith('BREAKING'));
      report = `# API Contract Testing Report\n\nResult: ${breaking ? 'BREAKING CHANGES FOUND' : 'COMPATIBLE OR NO BREAKING CHANGES'}\n\n${changes.length ? changes.map((item) => `- ${item}`).join('\n') : '- No schema, property, type, enum, or required-field differences found.'}\n\nNote: This browser-side checker covers common compatibility changes; use a full OpenAPI validator and CI contract suite for release gates.`;
      $('contractOutput').value = report;
      $('contractBadge').textContent = breaking ? 'BREAKING' : 'PASS';
      $('contractStatus').textContent = breaking ? 'Review the breaking changes before release.' : 'No likely breaking schema changes found.';
    } catch (error) {
      $('contractOutput').value = `Invalid JSON: ${error.message}`;
      $('contractBadge').textContent = 'ERROR';
      $('contractStatus').textContent = 'Paste valid JSON or OpenAPI documents.';
    }
  };
}());
