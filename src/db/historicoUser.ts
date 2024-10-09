export const historicoUser = [
  {
    id: 1,
    nome: "josé Emanuel",
    alergias: [
      {
        substance: "Penicilina",
        reacao: "Erupção cutânea",
      },
    ],
    doencas_preexistentes: [
      {
        nome: "Hipertensão",
        diagnostico: "2015-06-20",
        tratamento: "Losartana 50mg",
      },
    ],
    cirurgias: [
      {
        nome: "Apendicectomia",
        data: "2010-08-15",
        descricao: "Remoção do apêndice devido a apendicite aguda",
      },
    ],
    medicacoes: [
      {
        nome: "Losartana",
        dosagem: "50mg",
        frequencia: "Uma vez ao dia",
      },
      {
        nome: "Paracetamol",
        dosagem: "500mg",
        frequencia: "A cada 8 horas, se necessário",
      },
    ],
    consultas: [
      {
        id: 1,
        data: "15/09/2024",
        especialidade: "Cardiologia",
        motivo: "Avaliação de hipertensão",
        observacoes: "Pressão arterial controlada",
      },
      {
        id: 2,
        data: "05/05/2024",
        especialidade: "Clínica Geral",
        motivo: "Check-up anual",
        observacoes: "Exames laboratoriais dentro da normalidade",
      },
    ],
  },
];
