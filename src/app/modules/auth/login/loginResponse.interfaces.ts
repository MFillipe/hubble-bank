export interface LoginResponse {
  usuario: {
    id: number;
    cpf: string;
    nome: string;
    login: string;
    senha: string;
    senhaTemporaria: string | null;
    redefinirSenha: boolean;
  };
  conta: {
    id: number;
    numero: string;
    saldo: number;
    tipo: string;
    descricao: string;
  };
  contaCredito: {
    id: number;
    numero: string;
    saldo: number;
    tipo: string;
    descricao: string;
  };
  token: string;
  dataInicio: Date;
  dataFim: Date;
}
