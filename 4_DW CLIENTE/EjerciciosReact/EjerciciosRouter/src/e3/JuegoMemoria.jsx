import React, { useState, useEffect } from "react";
import { verificarJugador, cargarImagenes } from "./libreria";

function JuegoMemoria() {
    const [jugador, setJugador] = useState("");
    const [visitas, setVisitas] = useState(0);
    const [imagenes, setImagenes] = useState([]);
    const [seleccionadas, setSeleccionadas] = useState([]);
    const [aciertos, setAciertos] = useState(0);
    const [descubiertas, setDescubiertas] = useState(new Set());

    useEffect(() => {
        verificarJugador(setJugador, setVisitas);
        async function fetchData() {
            const imgs = await cargarImagenes();
            setImagenes(imgs);
        }
        fetchData();
    }, []);

    const manejarClick = (index) => {
        if (seleccionadas.length === 2 || seleccionadas.includes(index) || descubiertas.has(index)) return;

        const nuevasSeleccionadas = [...seleccionadas, index];
        setSeleccionadas(nuevasSeleccionadas);

        if (nuevasSeleccionadas.length === 2) {
            const [primera, segunda] = nuevasSeleccionadas;
            if (imagenes[primera].url === imagenes[segunda].url) {
                setAciertos(aciertos + 1);
                setDescubiertas(new Set([...descubiertas, primera, segunda]));
                setSeleccionadas([]);
                if (aciertos + 1 === imagenes.length / 2) {
                    alert(`¡Felicidades, ${jugador}! Has ganado.`);
                }
            } else {
                setTimeout(() => setSeleccionadas([]), 1000);
            }
        }
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Hola {jugador}, esta es tu visita número {visitas}.</h2>
            <h3>Aciertos: {aciertos}</h3>
            <h3>Por favor espere mientras se cargan las fotos</h3>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "20px", // Espacio entre las celdas
                justifyContent: "center",
                marginTop: "20px"
            }}>
                {imagenes.map((imagen, index) => (
                    <div 
                        key={index} 
                        onClick={() => manejarClick(index)} 
                        style={{ cursor: "pointer", position: "relative" }}
                    >
                        {seleccionadas.includes(index) || descubiertas.has(index) ? (
                            <img 
                                src={imagen.url} 
                                alt="Carta" 
                                style={{ 
                                    width: "120px", // Aumentar tamaño de imagen
                                    height: "120px", 
                                    borderRadius: "5px" 
                                }} 
                            />
                        ) : (
                            <div 
                                style={{
                                    width: "120px", // Aumentar tamaño de la celda
                                    height: "120px",
                                    backgroundColor: "#ccc",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "24px",
                                    borderRadius: "5px"
                                }}
                            >?</div>
                        )}

                        {/* Mostrar el correo solo cuando la imagen está descubierta */}
                        {(seleccionadas.includes(index) || descubiertas.has(index)) && (
                            <div style={{
                                position: "absolute",
                                bottom: "0", // Colocar el correo en la parte inferior
                                left: "50%",
                                transform: "translateX(-50%)", // Centrar horizontalmente
                                backgroundColor: "rgba(0, 0, 0, 0.7)",
                                color: "white",
                                padding: "5px 10px",
                                borderRadius: "5px",
                                fontSize: "12px", // Reducir el tamaño de la fuente
                                maxWidth: "80%", // Limitar el ancho para evitar que se salga
                                textOverflow: "ellipsis",
                                wordWrap: "break-word", // Ajustar el texto
                                boxSizing: "border-box" // Incluir el padding en el ancho total
                            }}>
                                {imagen.email}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default JuegoMemoria;