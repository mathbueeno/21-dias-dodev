class Computador{
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    Ssd

    constructor(tipo, processador, video, armazenamento, memoriaram, ssd){
        this.Tipo = tipo;
        this.Processador = processador;
        this.Video = video;
        this.Armazenamento = armazenamento;
        this.MemoriaRam = memoriaram;
        this.Ssd = ssd;
    }

    MostrarInformacoes(){
        console.log("Informações do Computador:")
        console.log(`Tipo: ${this.Tipo}`)
        console.log(`Processador: ${this.Processador}`)
        console.log(`Vídeo: ${this.Video}`)
        console.log(`Armazenamento: ${this.Armazenamento}`)
        console.log(`Memória RAM: ${this.MemoriaRam}`)
        console.log(`SSD: ${this.Ssd}`)
    }
}

const meuComputador = new Computador("Pc", "Intel 13º Geração", "RTX 4090", 2000, 32, true);
meuComputador.MostrarInformacoes();

