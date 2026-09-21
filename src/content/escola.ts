export type Encontro = {
  id: string;
  numero: string;
  data: string;
  tema: string;
  especialidades: string;
  iconUrl: string;
};

export const escolaContent = {
  temporada: "MARÇO A NOVEMBRO DE 2027",
  localBase: "SMCC",
  cidadeBase: "CAMPINAS",
  contexto: "Asma grave, dermatite atópica, psoríase, doença inflamatória intestinal, lúpus, artrite reumatoide, imunodeficiências e neuropatias autoimunes são doenças imunomediadas, abordadas em consultórios isoladamente. A Escola Continuada de Doenças Imunomediadas nasce para reunir, uma vez por mês, os médicos que atendem esse mesmo paciente — e colocá-los na mesma discussão, diante do mesmo caso.",
  publico: "Alergia e Imunologia · Pneumologia · Otorrinolaringologia · Dermatologia · Reumatologia · Gastroenterologia · Neurologia · Pediatria · Clínica Médica · Infectologia · Hematologia · Genética Médica · Residentes · Fellows · Pós-graduandos",
  encontros: [
    {
      id: "01",
      numero: "01",
      data: "18/03",
      tema: "Asma grave e rinossinusite crônica com polipose nasal",
      especialidades: "Pneumologia, Otorrino, Alergia",
      iconUrl: "/uploads/icon-1.svg"
    },
    {
      id: "02",
      numero: "02",
      data: "15/04",
      tema: "Dermatite atópica e urticária crônica",
      especialidades: "Dermatologia, Alergia, Pediatria",
      iconUrl: "/uploads/icon-2.svg"
    },
    {
      id: "03",
      numero: "03",
      data: "20/05",
      tema: "Psoríase",
      especialidades: "Dermatologia, Reumatologia",
      iconUrl: "/uploads/icon-3.svg"
    },
    {
      id: "04",
      numero: "04",
      data: "17/06",
      tema: "Doenças inflamatórias intestinais",
      especialidades: "Gastroenterologia, Clínica médica",
      iconUrl: "/uploads/icon-4.svg"
    },
    {
      id: "05",
      numero: "05",
      data: "19/08",
      tema: "Lúpus eritematoso sistêmico",
      especialidades: "Reumatologia, Nefrologia, Clínica",
      iconUrl: "/uploads/icon-5.svg"
    },
    {
      id: "06",
      numero: "06",
      data: "16/09",
      tema: "Artrite reumatoide e espondiloartrites",
      especialidades: "Reumatologia, Ortopedia, Clínica",
      iconUrl: "/uploads/icon-6.svg"
    },
    {
      id: "07",
      numero: "07",
      data: "21/10",
      tema: "Imunodeficiências primárias e secundárias",
      especialidades: "Imunologia, Hematologia, Infectologia",
      iconUrl: "/uploads/icon-7.svg"
    },
    {
      id: "08",
      numero: "08",
      data: "11/11",
      tema: "Neuropatias autoimunes e neuroimunologia",
      especialidades: "Neurologia, Imunologia",
      iconUrl: "/uploads/icon-8.svg"
    }
  ] as Encontro[]
};
