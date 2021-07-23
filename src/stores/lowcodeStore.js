import { observable } from 'mobx';

const _sections = [
  {
    id: 1,
    name: '默认区域',
    cols: 1,
    fields: [],
  },
];

function _find(arrs, id) {
  return arrs.find((item) => item.id === id);
}

function _remove(arrs, id) {
  const index = arrs.findIndex((item) => item.id === id);
  arrs.splice(index, 1);
  return arrs;
}

const Store = observable({
  sections: _sections,

  addSection(section) {
    debugger;
    this.sections.push(section);
    this.sections = [...this.sections];
  },

  removeSection(sectionId) {
    _remove(this.sections, sectionId);
    this.sections = [...this.sections];
  },

  addField(sectionId, field) {
    _find(this.sections, sectionId).fields.push(field);
    this.sections = [...this.sections];
  },

  removeField(sectionId, fieldId) {
    _remove(_find(this.sections, sectionId).fields, fieldId);
    this.sections = [...this.sections];
  },
});

export default Store;
