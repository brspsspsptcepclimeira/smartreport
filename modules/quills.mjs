import { showImageEditor} from './fastreport.mjs'

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
//QUILL LOCAL
export let quillLocal = new Quill('#editorLocal', {
  modules: {        
      toolbar: '#toolbar-local',
      toolbar: {
          container: toolbarOptionsImg,
              handlers:{image:function(){
                  if(this.quill.getSelection().index>0){
                      previusForm = '#form-local'
                      previusQuil = this.quill
                      previusIndex = this.quill.getSelection().index
                      abrirEditorImgESelecionarImagem()
                  }else{
                      alert('Posicione o cursor do mouse no local onde a imagem será inserida.')
                      return
                  }
              },
          }            
      }
  },
  theme: 'snow'
});
//QUILL VEÍCULO
export let quillVeicle = new Quill('#editorVeicle', {
  modules: {        
      toolbar: {
          container: toolbarOptionsImg,
              handlers:{image:function(){
                  if(this.quill.getSelection().index>0){
                      previusForm = '#form-veicle'
                      previusQuil = this.quill
                      previusIndex = this.quill.getSelection().index
                      abrirEditorImgESelecionarImagem()
                  }else{
                      alert('Posicione o cursor do mouse no local onde a imagem será inserida.')
                      return
                  }
              },
          }            
      }
  },
  theme: 'snow'
});
//QUILL PEÇA
export let quillThing = new Quill('#editorThing', {
  modules: {        
      toolbar: {
          container: toolbarOptionsImg,
              handlers:{image:function(){
                  if(this.quill.getSelection().index>0){
                      previusForm = '#form-thing'
                      previusQuil = this.quill
                      previusIndex = this.quill.getSelection().index
                      abrirEditorImgESelecionarImagem()
                  }else{
                      alert('Posicione o cursor do mouse no local onde a imagem será inserida.')
                      return
                  }
              },
          }            
      }
  },
  theme: 'snow'
});
//QUILL CADÁVER
export let quillCorpuses = new Quill('#editorCorpuses', {
  modules: {        
      toolbar: {
          container: toolbarOptionsImg,
              handlers:{image:function(){
                  if(this.quill.getSelection().index>0){
                      previusForm = '#form-corpuses'
                      previusQuil = this.quill
                      previusIndex = this.quill.getSelection().index
                      abrirEditorImgESelecionarImagem()
                  }else{
                      alert('Posicione o cursor do mouse no local onde a imagem será inserida.')
                      return
                  }
              },
          }            
      }
  },
  theme: 'snow'
});
//QUILL CONCLUSÃO
export let quillConclusion = new Quill('#editorConclusion', {
  modules: {        
      toolbar: {
          container: toolbarOptionsImg,
              handlers:{image:function(){
                  /* if(this.quill.getSelection().index>0){
                      previusForm = '#form-conclusion'
                      previusQuil = this.quill
                      previusIndex = this.quill.getSelection().index
                      abrirEditorImgESelecionarImagem()
                  }else{
                      alert('Posicione o cursor do mouse no local onde a imagem será inserida.')
                      return
                  } */
                  showImageEditor()
              },
          }            
      }
  },
  theme: 'snow'
});