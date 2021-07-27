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

  // sortField(sectionId, fromIndex, toIndex) {
  //   let _fields = _find(this.sections, sectionId).fields;
  //   _fields = toJS(_fields);
  //   const _target = _fields[fromIndex];
  //   // console.log('hahah 0 === ', fromIndex, toIndex, _fields, _target);
  //   _fields.splice(fromIndex, 1);
  //   _fields.splice(toIndex, 0, _target);
  //   const index = this.sections.findIndex((item) => item.id === sectionId);
  //   this.sections[index].fields = [..._fields];
  //   this.sections = [...this.sections];
  // },

  sortSection(sections) {
    this.sections = [...sections];
  },

  sortField(sectionId, fields) {
    const index = this.sections.findIndex((item) => item.id === sectionId);
    this.sections[index].fields = [...fields];
    this.sections = [...this.sections];
  },
});

export default Store;
