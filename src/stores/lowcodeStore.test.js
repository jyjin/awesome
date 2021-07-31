import lcStore from './lowcodeStore';

test(`添加区域section后sections长度加1`, () => {
  const length = lcStore.sections.length;
  lcStore.addSection();
  expect(lcStore.sections.length).toEqual(length + 1);
});

test(`添加区域section对象属性检测`, () => {
  lcStore.addSection();
  const theAdd = lcStore.sections[lcStore.sections.length - 1];
  expect(theAdd).toEqual(
    expect.objectContaining({
      id: expect.any(Number),
      name: expect.any(String),
      cols: expect.any(Number),
      fields: expect.any(Array),
    }),
  );
});

test(`添加字段后fields长度加1`, () => {
  const field = {
    code: 'TEXT_SINGLE',
    name: '单行文本',
  };
  const sectionId = 1;
  const fields = lcStore.sections.find((v) => v.id === sectionId).fields;
  const length = fields.length;
  lcStore.addField(sectionId, field);

  const afterFields = lcStore.sections.find((v) => v.id === sectionId).fields;
  expect(afterFields).toHaveLength(length + 1);
});
