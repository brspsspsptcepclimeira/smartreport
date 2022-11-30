

/*  BARRA DE FERRAMENTAS DE JANELAS QUE NÃO EXIBEM IMAGENS */
let toolbarOptions = [
    [{ 'header': [2, 3, false] }],
    ['bold', 'italic', 'underline'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],                                                        
  ];

/*  BARRA DE FERRAMENTAS DE JANELAS QUE EXIBEM IMAGENS */
let toolbarOptionsImg = [
    [{ 'header': [2, 3, false] }],
    ['bold', 'italic', 'underline'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],
    ['image'],                                                       
  ];

  /*  BARRA DE FERRAMENTAS DE JANELAS LIMITADAS À LISTAS E PARÁGRAFOS */
let toolbarOptionsQuestions = [
    [{ 'header': [false] }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],                                                 
  ];

// QUILL OBJETVO
export let quillObjective = new Quill('#editorObjective', {
  modules: {
      toolbar: '#toolbar',
      toolbar: toolbarOptions,
    },
    //placeholder:'teste',
  theme: 'snow'
  });
  // QUILL QUESTIONS
export let quillQuestions = new Quill('#editorQuestions', {
  modules: {
      toolbar: '#toolbar',
      toolbar: toolbarOptionsQuestions,
    },
    //placeholder:'teste',
  theme: 'snow'
});
  //QUILL INFORMES
export let quillInforms = new Quill('#editorInforms', {
    modules: {
        toolbar: toolbarOptions,
      },
    theme: 'snow'
  });
//QUILL HISTÓRICO
export let quillHistoric = new Quill('#editorHistoric', {
  modules: {
      toolbar: '#toolbar-historic',
      toolbar: toolbarOptions,
    },
  theme: 'snow'
});
