const novoFunc = (nomeComp) => {
    const nomeSobrenome = nomeComp.split(' ');
    const nome = nomeSobrenome[0];
    const sobrenome = nomeSobrenome[nomeSobrenome.length-1];
    const emailfunc = `${nome.toLowerCase()}.${sobrenome.toLowerCase()}@trybe.com`;
    const funcionario = {
        nome: nomeComp,
        email: emailfunc,
    }
    return funcionario;
}

const newEmployees = (criaFuncionario) => {
    const employees = {
      id1: criaFuncionario('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: criaFuncionario('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: criaFuncionario('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

console.log(newEmployees(novoFunc));
