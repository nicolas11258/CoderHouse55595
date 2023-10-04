class TicketManager {
    constructor() {
        this.eventos = [];
        this.precioBaseDeGanancia = 15;
    }
    
    
    getEventos() {
        return this.eventos;
    }
    
    
    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
        const id = this.eventos.length + 1;
        const evento = {
            id,
            nombre,
            lugar,
            precio: precio + this.precioBaseDeGanancia,
            capacidad,
            fecha,
            participantes: [],
        };
    
    
    this.eventos.push(evento);
        return evento;
    }
    
    
    agregarUsuario(idEvento, idUsuario) {
        const evento = this.eventos.find((evento) => evento.id === idEvento);
        
        
        if (!evento) {
            throw new Error("El evento no existe");
        }
        
        
        if (evento.participantes.includes(idUsuario)) {
            throw new Error("El usuario ya está registrado");
        }
        
        
        evento.participantes.push(idUsuario);
        return evento;
    }
    
    
    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
        const evento = this.eventos.find((evento) => evento.id === idEvento);
    
    
    if (!evento) {
        throw new Error("El evento no existe");
    }
    
    
    const eventoEnGira = {
        ...evento,
        lugar: nuevaLocalidad,
        fecha: nuevaFecha,
        id: this.eventos.length + 1,
        participantes: [],
    };
    
    
    this.eventos.push(eventoEnGira);
        return eventoEnGira;
    }
}
    
const ticketManager = new TicketManager();


// Agrega un evento
const evento = ticketManager.agregarEvento("Concierto de rock", "El Monumental", 1000);


console.log(ticketManager.getEventos())


// Agrega un usuario al evento
ticketManager.agregarUsuario(evento.id, 123456789);


console.log(ticketManager.getEventos())


// Obtiene todos los eventos
const eventos = ticketManager.getEventos();


// Pone el evento en gira
const eventoEnGira = ticketManager.ponerEventoEnGira(evento.id, "La Bombonera", new Date(2023, 10, 20));


console.log(ticketManager.getEventos())
    