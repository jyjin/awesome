import { observable } from 'mobx';
import { toJS } from 'mobx';

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
  current: {},
  sections: _sections,

  selectSection(id) {
    this.current['field'] = null;
    this.current['section'] = id;
    this.current = { ...this.current };
  },

  selectField(id) {
    this.current['field'] = id;
  },

  addSection() {
    const id = this.sections[this.sections.length - 1].id + 1;
    const newSection = { id, name: `区域${id}`, cols: 1, fields: [] };
    this.sections.push(newSection);
    this.sections = [...this.sections];
    // 新增的默认选中
    this.selectSection(id);
  },

  removeSection(sectionId) {
    _remove(this.sections, sectionId);
    this.sections = [...this.sections];
  },

  addField(sectionId, field) {
    _find(this.sections, sectionId).fields.push(field);
    _find(this.sections, sectionId).fields = [
      ..._find(this.sections, sectionId).fields,
    ];
    this.sections = [...this.sections];
    console.log(toJS(this.sections));
  },

  removeField(sectionId, fieldId) {
    _remove(_find(this.sections, sectionId).fields, fieldId);
    this.sections = [...this.sections];
  },

  sortField(sectionId, fromIndex, toIndex) {
    const _section = _find(this.section, sectionId);
    _section.splice(toIndex, 1);
    if (fromIndex < toIndex) {
      _section.splice(to, 1, _section[fromIndex]);
      _section.splice(fromIndex, 1);
    } else {
      _section.splice(to, 1, _section[fromIndex]);
      _section.splice(fromIndex + 1, 1);
    }
    const index = this.section.findIndex((item) => item.id === sectionId);
    this.section[index] = _section;
    this.sections = [...this.sections];
  },
});

export default Store;
