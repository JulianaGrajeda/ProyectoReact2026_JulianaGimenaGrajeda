function Inclinacion(e, elemento, maxGrados = 12) {
    const rect = elemento.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centroX = (x - rect.width / 2) / (rect.width / 2);
    const centroY = (y - rect.height / 2) / (rect.height / 2);

    return {
        rotarY: centroX * maxGrados,
        rotarX: -centroY * maxGrados,
    };
}
export default Inclinacion;