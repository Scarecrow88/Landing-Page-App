import "../css/statsContent.css";
const stats = [
    { number: "5M+", label: "Jugadores Activos" },
    { number: "150+", label: "Países" },
    { number: "24/7", label: "Soporte Técnico" },
    { number: "4.9★", label: "Calificación Promedio" },
];
const StatsSection = () => {
    return (
        <section className="statssection">
            <div className="statscontainer">
                {stats.map ((stat, index) => (
                    <div className="statbox" key={index}>
                        <h3 className="statnumber">{stat.number}</h3>
                        <p className="statlabel">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection;