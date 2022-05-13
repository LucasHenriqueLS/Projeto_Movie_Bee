const TMDB_ENDPOINT_BASE = 'https://api.themoviedb.org/3';

function MostraFilmesRecentes(){
    //Executar requisição AJAX

    $.ajax({
        // Passar a URL ENDPOINT BASE + /movie/now_playing
        url: TMDB_ENDPOINT_BASE + '/movie/upcoming',
        data: {
            api_key: '651cb2bdb0ac08b7a89407cc5ca190c6'
        }
    })
    // Receber o JSON
    .done(function(data){

        let codigo_html = `<div class="col-12">
                                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div class="row">
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-1">
                                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <div class="row">
                                                        <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                                            <div class="image-flip" >
                                                                <div class="mainflip flip-0">
                                                                    <div class="frontside">
                                                                        <div class="card" id="zerar_margin_bottom">
                                                                            <div class="card-body text-center img_padding">
                                                                                <p id="zerar_margin_bottom"><img src="${'https://image.tmdb.org/t/p/w500' + data.results[0].poster_path}" class="card-img-top" alt="${data.results[0].title}"></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="backside">
                                                                        <div class="card">
                                                                            <div class="card-body text-center mt-4">
                                                                                <h4 class="card-title">${data.results[0].title}</h4>
                                                                                <p class="card-text" id="text_size">${data.results[0].overview}</p>
                                                                                <p class="card-text" id="text_size">Data de Laçamento: ${data.results[0].release_date}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <button type="button" class="btn btn-dark pull-right" data-toggle="button" aria-pressed="false" onclick="exibeFilmeClicado (${idFilme})">Ir para o filme</button> 
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                                            <div class="image-flip" >
                                                                <div class="mainflip flip-0">
                                                                    <div class="frontside">
                                                                        <div class="card" id="zerar_margin_bottom">
                                                                            <div class="card-body text-center img_padding">
                                                                                <p id="zerar_margin_bottom"><img src="${'https://image.tmdb.org/t/p/w500' + data.results[1].poster_path}" class="card-img-top" alt="${data.results[1].title}"></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="backside">
                                                                        <div class="card">
                                                                            <div class="card-body text-center mt-4">
                                                                                <h4 class="card-title">${data.results[1].title}</h4>
                                                                                <p class="card-text" id="text_size">${data.results[1].overview}</p>
                                                                                <p class="card-text" id="text_size">Data de Laçamento: ${data.results[1].release_date}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <button type="button" class="btn btn-dark pull-right" data-toggle="button" aria-pressed="false" onclick="exibeFilmeClicado (${idFilme})">Ir para o filme</button> 
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                                            <div class="image-flip" >
                                                                <div class="mainflip flip-0">
                                                                    <div class="frontside">
                                                                        <div class="card" id="zerar_margin_bottom">
                                                                            <div class="card-body text-center img_padding">
                                                                                <p id="zerar_margin_bottom"><img src="${'https://image.tmdb.org/t/p/w500' + data.results[2].poster_path}" class="card-img-top" alt="${data.results[2].title}"></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="backside">
                                                                        <div class="card">
                                                                            <div class="card-body text-center mt-4">
                                                                                <h4 class="card-title">${data.results[2].title}</h4>
                                                                                <p class="card-text" id="text_size">${data.results[2].overview}</p>
                                                                                <p class="card-text" id="text_size">Data de Laçamento: ${data.results[2].release_date}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <button type="button" class="btn btn-dark pull-right" data-toggle="button" aria-pressed="false" onclick="exibeFilmeClicado (${idFilme})">Ir para o filme</button> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <div class="row">
                                                        <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                                            <div class="image-flip" >
                                                                <div class="mainflip flip-0">
                                                                    <div class="frontside">
                                                                        <div class="card" id="zerar_margin_bottom">
                                                                            <div class="card-body text-center img_padding">
                                                                                <p id="zerar_margin_bottom"><img src="${'https://image.tmdb.org/t/p/w500' + data.results[4].poster_path}" class="card-img-top" alt="${data.results[4].title}"></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="backside">
                                                                        <div class="card">
                                                                            <div class="card-body text-center mt-4">
                                                                                <h4 class="card-title">${data.results[4].title}</h4>
                                                                                <p class="card-text" id="text_size">${data.results[4].overview}</p>
                                                                                <p class="card-text" id="text_size">Data de Laçamento: ${data.results[4].release_date}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <button type="button" class="btn btn-dark pull-right" data-toggle="button" aria-pressed="false" onclick="exibeFilmeClicado (${idFilme})">Ir para o filme</button> 
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                                            <div class="image-flip" >
                                                                <div class="mainflip flip-0">
                                                                    <div class="frontside">
                                                                        <div class="card" id="zerar_margin_bottom">
                                                                            <div class="card-body text-center img_padding">
                                                                                <p id="zerar_margin_bottom"><img src="${'https://image.tmdb.org/t/p/w500' + data.results[5].poster_path}" class="card-img-top" alt="${data.results[5].title}"></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="backside">
                                                                        <div class="card">
                                                                            <div class="card-body text-center mt-4">
                                                                                <h4 class="card-title">${data.results[5].title}</h4>
                                                                                <p class="card-text" id="text_size">${data.results[5].overview}</p>
                                                                                <p class="card-text" id="text_size">Data de Laçamento: ${data.results[5].release_date}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <button type="button" class="btn btn-dark pull-right" data-toggle="button" aria-pressed="false" onclick="exibeFilmeClicado (${idFilme})">Ir para o filme</button> 
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                                            <div class="image-flip" >
                                                                <div class="mainflip flip-0">
                                                                    <div class="frontside">
                                                                        <div class="card" id="zerar_margin_bottom">
                                                                            <div class="card-body text-center img_padding">
                                                                                <p id="zerar_margin_bottom"><img src="${'https://image.tmdb.org/t/p/w500' + data.results[6].poster_path}" class="card-img-top" alt="${data.results[6].title}"></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="backside">
                                                                        <div class="card">
                                                                            <div class="card-body text-center mt-4">
                                                                                <h4 class="card-title">${data.results[6].title}</h4>
                                                                                <p class="card-text" id="text_size">${data.results[6].overview}</p>
                                                                                <p class="card-text" id="text_size">Data de Laçamento: ${data.results[6].release_date}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <button type="button" class="btn btn-dark pull-right" data-toggle="button" aria-pressed="false" onclick="exibeFilmeClicado (${idFilme})">Ir para o filme</button> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <div class="row">
                                                        <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                                            <div class="image-flip" >
                                                                <div class="mainflip flip-0">
                                                                    <div class="frontside">
                                                                        <div class="card" id="zerar_margin_bottom">
                                                                            <div class="card-body text-center img_padding">
                                                                                <p id="zerar_margin_bottom"><img src="${'https://image.tmdb.org/t/p/w500' + data.results[7].poster_path}" class="card-img-top" alt="${data.results[7].title}"></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="backside">
                                                                        <div class="card">
                                                                            <div class="card-body text-center mt-4">
                                                                                <h4 class="card-title">${data.results[7].title}</h4>
                                                                                <p class="card-text" id="text_size">${data.results[7].overview}</p>
                                                                                <p class="card-text" id="text_size">Data de Laçamento: ${data.results[7].release_date}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <button type="button" class="btn btn-dark pull-right" data-toggle="button" aria-pressed="false" onclick="exibeFilmeClicado (${idFilme})">Ir para o filme</button> 
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                                            <div class="image-flip" >
                                                                <div class="mainflip flip-0">
                                                                    <div class="frontside">
                                                                        <div class="card" id="zerar_margin_bottom">
                                                                            <div class="card-body text-center img_padding">
                                                                                <p id="zerar_margin_bottom"><img src="${'https://image.tmdb.org/t/p/w500' + data.results[8].poster_path}" class="card-img-top" alt="${data.results[8].title}"></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="backside">
                                                                        <div class="card">
                                                                            <div class="card-body text-center mt-4">
                                                                                <h4 class="card-title">${data.results[8].title}</h4>
                                                                                <p class="card-text" id="text_size">${data.results[8].overview}</p>
                                                                                <p class="card-text" id="text_size">Data de Laçamento: ${data.results[8].release_date}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <button type="button" class="btn btn-dark pull-right" data-toggle="button" aria-pressed="false" onclick="exibeFilmeClicado (${idFilme})">Ir para o filme</button> 
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                                            <div class="image-flip" >
                                                                <div class="mainflip flip-0">
                                                                    <div class="frontside">
                                                                        <div class="card" id="zerar_margin_bottom">
                                                                            <div class="card-body text-center img_padding">
                                                                                <p id="zerar_margin_bottom"><img src="${'https://image.tmdb.org/t/p/w500' + data.results[9].poster_path}" class="card-img-top" alt="${data.results[9].title}"></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="backside">
                                                                        <div class="card">
                                                                            <div class="card-body text-center mt-4">
                                                                                <h4 class="card-title">${data.results[9].title}</h4>
                                                                                <p class="card-text" id="text_size">${data.results[9].overview}</p>
                                                                                <p class="card-text" id="text_size">Data de Laçamento: ${data.results[9].release_date}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <button type="button" class="btn btn-dark pull-right" data-toggle="button" aria-pressed="false" onclick="exibeFilmeClicado (${idFilme})">Ir para o filme</button> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-1">
                                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Next</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>`
        
        // Repassar os cards para a página
        $('#lista_filmesRecentes').html(codigo_html)
    });
}







function MostraFilmesPopulares () {
    //Executar requisição AJAX

    $.ajax({
        // Passar a URL ENDPOINT BASE + /movie/now_playing
        url: TMDB_ENDPOINT_BASE + '/movie/popular',
        data: {
            api_key: '651cb2bdb0ac08b7a89407cc5ca190c6'
        }
    })
    // Receber o JSON
    .done(function (data) {
 
        let codigo_html = '';
        
         // Montar os cards
         for (i=0; i<8; i++) {

            // Concatenar o código do Card com os dados do JSON
            titulo = data.results[i].title;
            imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
            descricao = data.results[i].overview;
            lancamento = data.results[i].release_date;
            idFilme = data.results[i].id;

            codigo_html += `<div class="col-12 col-sm-6 col-md-6 col-lg-3">
                                <div class="image-flip" >
                                    <div class="mainflip flip-0">
                                        <div class="frontside">
                                            <div class="card" id="zerar_margin_bottom">
                                                <div class="card-body text-center img_padding">
                                                    <p id="zerar_margin_bottom"><img src="${imagem}" class="card-img-top" alt="${titulo}"></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="backside">
                                            <div class="card">
                                                <div class="card-body text-center mt-4">
                                                    <h4 class="card-title">${titulo}</h4>
                                                    <p class="card-text" id="text_size">${descricao}</p>
                                                    <p class="card-text" id="text_size">
                                                    Data de Laçamento: ${lancamento}
                                                    </p>
                                                    <p class="card-text idDoFilmeClicado" id="text_size">ID - ${idFilme}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button type="button" class="btn btn-dark pull-right" data-toggle="button" aria-pressed="false" onclick="exibeFilmeClicadoV01 (${idFilme})">Ir para o filme</button> 
                                </div>
                            </div>`;
         }


        // Repassar os cards para a página
         $('#lista_filmesPopulares').html(codigo_html)

    });

}





// Função que cria os cards dos filmes
function MostraFilmesEmCartaz () {
    //Executar requisição AJAX

    $.ajax({
        // Passar a URL ENDPOINT BASE + /movie/now_playing
        url: TMDB_ENDPOINT_BASE + '/movie/now_playing',
        data: {
            api_key: '651cb2bdb0ac08b7a89407cc5ca190c6'
        }
    })
    // Receber o JSON
    .done(function (data) {
 
        let codigo_html = '';
        
        // Montar os cards
        for (i=0; i<8; i++) {

            // Concatenar o código do Card com os dados do JSON
            titulo = data.results[i].title;
            imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
            descricao = data.results[i].overview;
            lancamento = data.results[i].release_date;
            idFilme = data.results[i].id;

            codigo_html += `<div class="col-12 col-sm-6 col-md-6 col-lg-3">
                                <div class="image-flip" >
                                    <div class="mainflip flip-0">
                                        <div class="frontside">
                                            <div class="card" id="zerar_margin_bottom">
                                                <div class="card-body text-center img_padding">
                                                    <p id="zerar_margin_bottom"><img src="${imagem}" class="card-img-top" alt="${titulo}"></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="backside">
                                            <div class="card">
                                                <div class="card-body text-center mt-4">
                                                    <h4 class="card-title">${titulo}</h4>
                                                    <p class="card-text" id="text_size">${descricao}</p>
                                                    <p class="card-text" id="text_size">
                                                    Data de Laçamento: ${lancamento}
                                                    </p>
                                                    <p class="card-text idDoFilmeClicado" id="text_size">ID - ${idFilme}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button type="button" class="btn btn-dark pull-right" data-toggle="button" aria-pressed="false" onclick="exibeFilmeClicadoV02 (${idFilme})">Ir para o filme</button> 
                                </div>
                            </div>`;
        }

        // Repassar os cards para a página
         $('#lista_filmes').html(codigo_html)

    });

}





function PesquisaFilmes () {
    let _resultadoDaPesquisa = $("#inputTelefone").val();
    $.ajax({
        // Passar a URL ENDPOINT BASE + /movie/now_playing
        url: TMDB_ENDPOINT_BASE + '/search/movie',
        data: {
            api_key: '651cb2bdb0ac08b7a89407cc5ca190c6',
            query: _resultadoDaPesquisa
        }
    })
    // Receber o JSON
    .done(function (data) {
 
        let codigo_html = '';
        
        // Montar os cards
        for (i=0; i< data.results.length; i++) {

            // Concatenar o código do Card com os dados do JSON
            titulo = data.results[i].title;
            imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
            descricao = data.results[i].overview;
            lancamento = data.results[i].release_date;
            idFilme = data.results[i].id;

            codigo_html += `<div class="col-12 col-sm-6 col-md-6 col-lg-3">
                                <div class="image-flip" >
                                    <div class="mainflip flip-0">
                                        <div class="frontside">
                                            <div class="card" id="zerar_margin_bottom">
                                                <div class="card-body text-center img_padding">
                                                    <p id="zerar_margin_bottom"><img src="${imagem}" class="card-img-top" alt="${titulo}"></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="backside">
                                            <div class="card">
                                                <div class="card-body text-center mt-4">
                                                    <h4 class="card-title">${titulo}</h4>
                                                    <p class="card-text" id="text_size">${descricao}</p>
                                                    <p class="card-text" id="text_size">
                                                    Data de Laçamento: ${lancamento}
                                                    </p>
                                                    <p class="card-text idDoFilmeClicado" id="text_size">ID - ${idFilme}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button type="button" class="btn btn-dark pull-right" data-toggle="button" aria-pressed="false" onclick="exibeFilmeClicadoV03 (${idFilme}, ${_resultadoDaPesquisa})">Ir para o filme</button> 
                                </div>
                            </div>`;
        }
        resto_html = ``;

        tituloPesquisa_html = `<div class="col-12 titulo_em_destaque">
                                    <h2>Resultados relacionado a "${_resultadoDaPesquisa}"</h2>
                                </div>`;


        // Repassar os cards para a página
        $('#tituloPesquisa').html(tituloPesquisa_html)
        $('#lista_filmesRecentes').html(codigo_html)
        $('#lista_filmesPopulares').html(resto_html)
        $('#lista_filmes').html(resto_html)
        $('#resto_titulos00').html(resto_html)
        $('#resto_titulos01').html(resto_html)
    });
}


$(document).ready(function(){
    MostraFilmesRecentes();
    MostraFilmesEmCartaz();
    MostraFilmesPopulares();

    $('#btn_Pesquisar').click(PesquisaFilmes);
});







function exibeFilmeClicado (filme_clicado) {
  //let filme_clicado = 602211; //$(".idDoFilmeClicado").val();

    //Executar requisição AJAX

    $.ajax({
        // Passar a URL ENDPOINT BASE + /movie/now_playing
        url: TMDB_ENDPOINT_BASE + '/movie/upcoming',
        data: {
            api_key: '651cb2bdb0ac08b7a89407cc5ca190c6'
        }
    })
    // Receber o JSON
    .done(function (data) {
        
        
        let codigo_html = '';
        

        
        // Montar os cards
        // Popula a tabela com os registros do banco de dados
        for (i = 0; i < data.results.length; i++) {


            // Concatenar o código do Card com os dados do JSON
            titulo = data.results[i].title;
            imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
            descricao = data.results[i].overview;
            lancamento = data.results[i].release_date;
            idFilme = data.results[i].id;
            idExterno = data.results[i].imdb_id;
            idExterna = 'https://www.imdb.com/title/' + idExterno;

            if (idFilme == filme_clicado) {
                codigo_html += `<div class="col-12 col-sm-6 col-md-4 col-lg-4">
                                    <p><img src="${imagem}" class="card-img-top" alt="${titulo}"></p>
                                </div>
                                <div class="col-12 col-sm-6 col-md-8 col-lg-8">
                                    <h2>${titulo}</h2>
                                    <p class="estreia_lancamento text-muted">${lancamento} / Action</p>
                                    <p class="sinopse_lancamento"><span style="font-weight: bold">Sinopse:</span> ${descricao}</p>
                                    <p class="sinopse_lancamento"><span style="font-weight: bold">Avaliação:</span> ${data.results[i].vote_average}</p>
                                    <p class="sinopse_lancamento"><span style="font-weight: bold">Popularidade:</span> ${data.results[i].popularity}</p>
                                    <p class="card-text idDoFilmeClicado" id="text_size"><span style="font-weight: bold">ID</span> - ${idFilme}</p>
                                    <h6 class="md-text"><a href="${idExterna}" target="_blank"><b>${idExterno}</b></a></h6>
                                </div>`;


            }

        resto_html = ``;

        tituloPesquisa_html = `<div class="col-12 titulo_em_destaque">
                                    <h2>Página do Filme</h2>
                                </div>`;


        // Repassar os cards para a página
        $('#tituloPesquisa').html(tituloPesquisa_html)
        $('#lista_filmesRecentes').html(codigo_html)
        $('#lista_filmesPopulares').html(resto_html)
        $('#lista_filmes').html(resto_html)
        $('#resto_titulos00').html(resto_html)
        $('#resto_titulos01').html(resto_html)

        }
    })

}








function exibeFilmeClicadoV01 (filme_clicado) {
  //let filme_clicado = 602211; //$(".idDoFilmeClicado").val();

    //Executar requisição AJAX

    $.ajax({
        // Passar a URL ENDPOINT BASE + /movie/now_playing
        url: TMDB_ENDPOINT_BASE + '/movie/popular',
        data: {
            api_key: '651cb2bdb0ac08b7a89407cc5ca190c6'
        }
    })
    // Receber o JSON
    .done(function (data) {
        
        
        let codigo_html = '';
        

        
        // Montar os cards
        // Popula a tabela com os registros do banco de dados
        for (i = 0; i < data.results.length; i++) {


            // Concatenar o código do Card com os dados do JSON
            titulo = data.results[i].title;
            imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
            descricao = data.results[i].overview;
            lancamento = data.results[i].release_date;
            idFilme = data.results[i].id;

            if (idFilme == filme_clicado) {
                codigo_html += `<div class="col-12 col-sm-6 col-md-4 col-lg-4">
                                    <p><img src="${imagem}" class="card-img-top" alt="${titulo}"></p>
                                </div>
                                <div class="col-12 col-sm-6 col-md-8 col-lg-8">
                                    <h2>${titulo}</h2>
                                    <p class="estreia_lancamento text-muted">${lancamento} / Action</p>
                                    <p class="sinopse_lancamento"><span style="font-weight: bold">Sinopse:</span> ${descricao}</p>
                                    <p class="sinopse_lancamento"><span style="font-weight: bold">Avaliação:</span> ${data.results[i].vote_average}</p>
                                    <p class="sinopse_lancamento"><span style="font-weight: bold">Popularidade:</span> ${data.results[i].popularity}</p>
                                    <p class="card-text idDoFilmeClicado" id="text_size"><span style="font-weight: bold">ID</span> - ${idFilme}</p>
                                </div>`;


            }

        resto_html = ``;

        tituloPesquisa_html = `<div class="col-12 titulo_em_destaque">
                                    <h2>Página do Filme</h2>
                                </div>`;


        // Repassar os cards para a página
        $('#tituloPesquisa').html(tituloPesquisa_html)
        $('#lista_filmesRecentes').html(codigo_html)
        $('#lista_filmesPopulares').html(resto_html)
        $('#lista_filmes').html(resto_html)
        $('#resto_titulos00').html(resto_html)
        $('#resto_titulos01').html(resto_html)

        }
    })

}









function exibeFilmeClicadoV02 (filme_clicado) {
  //let filme_clicado = 602211; //$(".idDoFilmeClicado").val();

    //Executar requisição AJAX

    $.ajax({
        // Passar a URL ENDPOINT BASE + /movie/now_playing
        url: TMDB_ENDPOINT_BASE + '/movie/now_playing',
        data: {
            api_key: '651cb2bdb0ac08b7a89407cc5ca190c6'
        }
    })
    // Receber o JSON
    .done(function (data) {
        
        
        let codigo_html = '';
        

        
        // Montar os cards
        // Popula a tabela com os registros do banco de dados
        for (i = 0; i < data.results.length; i++) {


            // Concatenar o código do Card com os dados do JSON
            titulo = data.results[i].title;
            imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
            descricao = data.results[i].overview;
            lancamento = data.results[i].release_date;
            idFilme = data.results[i].id;

            if (idFilme == filme_clicado) {
                codigo_html += `<div class="col-12 col-sm-6 col-md-4 col-lg-4">
                                    <p><img src="${imagem}" class="card-img-top" alt="${titulo}"></p>
                                </div>
                                <div class="col-12 col-sm-6 col-md-8 col-lg-8">
                                    <h2>${titulo}</h2>
                                    <p class="estreia_lancamento text-muted">${lancamento} / Action</p>
                                    <p class="sinopse_lancamento"><span style="font-weight: bold">Sinopse:</span> ${descricao}</p>
                                    <p class="sinopse_lancamento"><span style="font-weight: bold">Avaliação:</span> ${data.results[i].vote_average}</p>
                                    <p class="sinopse_lancamento"><span style="font-weight: bold">Popularidade:</span> ${data.results[i].popularity}</p>
                                    <p class="card-text idDoFilmeClicado" id="text_size"><span style="font-weight: bold">ID</span> - ${idFilme}</p>
                                </div>`;


            }

        resto_html = ``;

        tituloPesquisa_html = `<div class="col-12 titulo_em_destaque">
                                    <h2>Página do Filme</h2>
                                </div>`;


        // Repassar os cards para a página
        $('#tituloPesquisa').html(tituloPesquisa_html)
        $('#lista_filmesRecentes').html(codigo_html)
        $('#lista_filmesPopulares').html(resto_html)
        $('#lista_filmes').html(resto_html)
        $('#resto_titulos00').html(resto_html)
        $('#resto_titulos01').html(resto_html)

        }
    })

}







function exibeFilmeClicadoV03 (filme_clicado, _resultadoDaPesquisa) {
  //let filme_clicado = 602211; //$(".idDoFilmeClicado").val();

    //Executar requisição AJAX

    $.ajax({
        // Passar a URL ENDPOINT BASE + /movie/now_playing
        url: TMDB_ENDPOINT_BASE + '/search/movie',
        data: {
            api_key: '651cb2bdb0ac08b7a89407cc5ca190c6'
            //query: _resultadoDaPesquisa
        }
    })
    // Receber o JSON
    .done(function (data) {
        
        
        let codigo_html = '';
        

        
        // Montar os cards
        // Popula a tabela com os registros do banco de dados
        for (i = 0; i < data.results.length; i++) {


            // Concatenar o código do Card com os dados do JSON
            titulo = data.results[i].title;
            imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
            descricao = data.results[i].overview;
            lancamento = data.results[i].release_date;
            idFilme = data.results[i].id;

            if (idFilme == filme_clicado) {
                codigo_html += `<div class="col-12 col-sm-6 col-md-4 col-lg-4">
                                    <p><img src="${imagem}" class="card-img-top" alt="${titulo}"></p>
                                </div>
                                <div class="col-12 col-sm-6 col-md-8 col-lg-8">
                                    <h2>${titulo}</h2>
                                    <p class="estreia_lancamento text-muted">${lancamento} / Action</p>
                                    <p class="sinopse_lancamento"><span style="font-weight: bold">Sinopse:</span> ${descricao}</p>
                                    <p class="sinopse_lancamento"><span style="font-weight: bold">Avaliação:</span> ${data.results[i].vote_average}</p>
                                    <p class="sinopse_lancamento"><span style="font-weight: bold">Popularidade:</span> ${data.results[i].popularity}</p>
                                    <p class="card-text idDoFilmeClicado" id="text_size"><span style="font-weight: bold">ID</span> - ${idFilme}</p>
                                </div>`;


            }

        resto_html = ``;

        tituloPesquisa_html = `<div class="col-12 titulo_em_destaque">
                                    <h2>Página do Filme</h2>
                                </div>`;


        // Repassar os cards para a página
        $('#tituloPesquisa').html(tituloPesquisa_html)
        $('#lista_filmesRecentes').html(codigo_html)
        $('#lista_filmesPopulares').html(resto_html)
        $('#lista_filmes').html(resto_html)
        $('#resto_titulos00').html(resto_html)
        $('#resto_titulos01').html(resto_html)

        }
    })

}