import axios from 'axios';

export const getJyCompos = () => axios.get('api/jy-components');

export const runBabel = (code) => axios.post('http://localhost:30010/tool/babel', {code})