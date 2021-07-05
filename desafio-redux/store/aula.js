// aulas/COMPLETAR_AULA(id), completa a aula com base no ID passado
// aulas/COMPLETAR_CURSO, completa todas as aulas
// aulas/RESETAR_CURSO, reseta todas as aulas completas
// Crie constantes e action creators para as ações.
// Crie um reducer para aluno e um para aulas.
// Renderize na tela o nome, email, tempo restante e o total de aulas completas
// Configure a DevTools

const initialState = [
  {
    id: 1,
    nome: 'Design',
    completa: true,
  },
  {
    id: 2,
    nome: 'HTML',
    completa: false,
  },
  {
    id: 3,
    nome: 'CSS',
    completa: false,
  },
  {
    id: 4,
    nome: 'JavaScript',
    completa: false,
  },
];

const COMPLETAR_AULA = 'aluno/COMPLETAR_AULA';
const COMPLETAR_CURSO = 'aluno/COMPLETAR_CURSO';
const RESETAR_CURSO = 'aluno/RESETAR_CURSO';

export const completar_aula = () => ({ type: COMPLETAR_AULA });
export const completar_curso = () => ({ type: COMPLETAR_CURSO });
export const resetar_curso = () => ({ type: RESETAR_CURSO });

const reducer = immer.produce((state = initialState, action) => {
  switch (action.type) {
    case COMPLETAR_AULA:
      break;
    case COMPLETAR_CURSO:
      state.completa = initialState.forEach((aulas) => (aulas.completa = true));
      break;
    case RESETAR_CURSO:
      state.completa = initialState.forEach(
        (aulas) => (aulas.completa = false),
      );
      break;
  }
});
