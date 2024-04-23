module.exports = function(grunt){
  //configuration
  grunt.initConfig({
    concat: { /* declarar o plugin e abrir bloco */
      js: { /* pasta de origem */
        src: ['js/*.js'], /* seleciona o arquivo de origem por nome, se forem muitos selecionar todos com * */
        dest: 'build/script.js' /* caminho para ele criar a pasta de destino junto com o nome do arquivo */
      },
      css: {
        src: ['css/*css'],
        dest: 'build/styles.css'
      }
    },

    sass: {
      build: {
        files: [{
          src: 'css/sass/styles.scss', /* PASTA DE ORIGEM DO ARQUIVO QUE QUER COMPILAR */
          dest: 'css/styles.css' /* PASTA E O NOME DO ARQUIVO DE DESTINO, ESSA PASTA QUE USO PARA FAZER O DEPLOY NA VERCEL */
        }]
      }
    },

    uglify: {
      build: {
        files: [{
          src: 'build/script.js', /* PASTA DE ORIGEM DO ARQUIVO QUE QUER COMPILAR */
          dest: 'build/script.js' /* PASTA E O NOME DO ARQUIVO DE DESTINO, ESSA PASTA QUE USO PARA FAZER O DEPLOY NA VERCEL */
        }]
      }
    }
  });


  //load plugins (CARREGAR OS PLUGINS)
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  //Register Tasks (REGISTRAR TAREFAS PARA RODAR)
  grunt.registerTask('default', ['concat:js', 'concat:css', 'sass', 'uglify']);  
};