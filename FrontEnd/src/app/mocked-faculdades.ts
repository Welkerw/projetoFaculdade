import { Faculdade } from './faculdade';
import { Curso } from './cursos';

export const CURSOS: Curso[] = [
  {id: 1, nome: 'ADM', nota: 8, notaMediaGeral: 3, idInstituicao: 1},
  {nome: 'DIR', id: 2, nota: 9, notaMediaGeral: 5, idInstituicao: 2},
  {nome: 'SI', id: 1, nota: 7, notaMediaGeral: 10, idInstituicao: 3}
];

export const FACULDADES: Faculdade[] = [
  { id: 11, nome: 'Mr. Nice', notaGeral: 10, cursos: CURSOS},
  { id: 12, nome: 'Narco', notaGeral: 10, cursos: CURSOS},
  { id: 13, nome: 'Bombasto', notaGeral: 10, cursos: CURSOS},
  { id: 14, nome: 'Celeritas', notaGeral: 10, cursos: CURSOS},
  { id: 15, nome: 'Magneta', notaGeral: 10, cursos: CURSOS},
  { id: 16, nome: 'RubberMan', notaGeral: 10, cursos: CURSOS },
  { id: 17, nome: 'Dynama', notaGeral: 10, cursos: CURSOS },
  { id: 18, nome: 'Dr IQ', notaGeral: 10, cursos: CURSOS },
  { id: 19, nome: 'Magma', notaGeral: 10, cursos: CURSOS },
  { id: 20, nome: 'Tornado', notaGeral: 10, cursos: CURSOS }
];
