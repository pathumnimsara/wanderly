import { ArrowUpRight, MapPin } from "lucide-react";

function DestinationCard({ destination, large = false }) {
  return (
    <article className={`destination-card ${large ? "large" : ""}`}>
      <img
        src={destination.image}
        alt={`${destination.city}, ${destination.country}`}
      />

      <div className="card-overlay"></div>

      <div className="card-top">
        <span>{destination.tag}</span>

        <button type="button">
          <ArrowUpRight size={18} />
        </button>
      </div>

      <div className="card-content">
        <div className="card-location">
          <MapPin size={14} />
          <span>{destination.country}</span>
        </div>

        <h3>{destination.city}</h3>
      </div>
    </article>
  );
}

export default DestinationCard;