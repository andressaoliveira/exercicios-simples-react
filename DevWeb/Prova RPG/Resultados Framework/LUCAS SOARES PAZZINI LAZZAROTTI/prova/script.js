var app = new function() {
    this.el = document.getElementById('tasks');
  
    this.tasks = [];
  
    
    
    this.FetchAll = function() {
      var data = '';
  
      if (this.tasks.length > 0) {
        for (i = 0; i < this.tasks.length; i++) {
          data += '<div>';
          data += `<p id='${this.tasks[i]}'>${(i+1)} ${this.tasks[i]} </p>`;
          data += '<button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Edit</button>';
          data += '<button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Delete</button>';
          data += '</div>';
        }
      }

      this.Count(this.tasks.length);
      return this.el.innerHTML = data;
    };
  
    this.Add = function () {
      el = document.getElementById('add-todo');
      // Pega o valor
      var task = el.value;
  
      if (task) {
        // Adiciona novo valor
        this.tasks.push(task.trim());
        // reseta o valor do input
        el.value = '';
        // Dislay the new list
        this.FetchAll();
      }
    };
  
    this.Edit = function (item) {
      var el = document.getElementById('edit-todo');
      // Mostra o valor
      el.value = this.tasks[item];
      
      document.getElementById('edit-box').style.display = 'block';
      self = this;
  
      document.getElementById('save-edit').onsubmit = function() {
        // Pega o valor
        var task = el.value;
  
        if (task) {
          // Edita o value
          self.tasks.splice(item, 1, task.trim());
          // Mostra o novo item
          self.FetchAll();
          
          CloseInput();
        }
      }
    };
  
    this.Delete = function (item) {
      // Exclui a linha atual
      this.tasks.splice(item, 1);
      // Atualiza a lista
      this.FetchAll();
    };
  


    this.Count = function(data) {
      var el   = document.getElementById('counter');
      var name = 'Tasks';
  

    };
    
  }
  
  app.FetchAll();
  
  function CloseInput() {
    document.getElementById('edit-box').style.display = 'none';
  }