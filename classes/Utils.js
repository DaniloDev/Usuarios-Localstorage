class Utils{

   static dataFormat(date){

      return date.getDate() + '/' + (date.getMonth() +1) + '/' + date.getFullYear() + ' '+ date.getHours() + ':' + date.getMinutes()

     /* if(date.getMinutes() <= 9){
            return '0' + date.getMinutes()
      }
      
      if (date.getDate() <= 9 && date.getMonth() > 9){

         return '0' + date.getDate() + '/' + (date.getMonth() +1) + '/' + date.getFullYear() + ' '+ date.getHours() + ':' + date.getMinutes()
      }
      else if (date.getDate() <= 9 && date.getMonth() <= 9){

         return '0' + date.getDate() + '/' + '0' + (date.getMonth() +1) + '/' + date.getFullYear() + ' '+ date.getHours() + ':' + date.getMinutes()
      }
      else{
         return date.getDate() + '/' + (date.getMonth() +1) + '/' + date.getFullYear() + ' '+ date.getHours() + ':' + date.getMinutes()
      }*/
  
    }

    static showAndHideForm(show, hide){

      if(!show){
         return alert('O parametro "show -> 1º parametro está vazio"')
      }
      else if(!hide){
         return alert('O parametro "hide -> 2º parametro está vazio"')
      }
 
		document.querySelector(`${show}`).style.display = 'block';
 
		document.querySelector(`${hide}`).style.display = 'none';
 
	}
}

//REFATORAR//
/*class Utils {
 
	static timeStamp(date, locale){
 
		return date.toLocaleDateString(locale) + ' - ' + date.toLocaleTimeString(locale);
 
	}
 
	static showAndHide(show, hide){
 
		document.querySelector(`#${show}`).style.display = 'block';
 
		document.querySelector(`#${hide}`).style.display = 'none';
 
	}
 */







 /*

 Olá a todos, quem está querendo fazer um preview da imagem carregada para dá noção ao usuário qual a foto carregada é fácil basta adicionar um evento "change" e chamar o getPhoto já feito anteriormente e adicionar um elemento img no formulário então atribuir no atributo 'src' de img o conteudo na função resolve da promessa.
Um exemplo de como poderia ser feito:

preview() {
 
        let elements = [
            {
                id: "exampleInputFile",
                form: this._formCreateEl
            },
            {
                id: "editInputFile",
                form: this._formUpdateEl
            }
        ];
        
        elements.forEach(
            (element) => {
                this.addPreviewEvent(element.id, element.form);
            }
        )        
 
    }
 
    addPreviewEvent(id, form) {
        document.getElementById(id).addEventListener(
            "change",
            (event) => {
 
                this.getPhoto(form).then(
                    (content) => {
                        form.querySelector(".profile-image").src = content;
                    },
                    (e) => {
                        console.error(e);
                    }
                )
 
            }  
        );
    }

 */