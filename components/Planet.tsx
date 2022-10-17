import { Planet } from "../utils/types";
import styles from "../styles/Planet.module.css";
import Link from "next/link";

interface Props {
  planet: Planet;
}

const PlanetItem: React.FC<Props> = ({ planet }) => {
  return (
    <Link href={`/${planet.id}`}>
      <a>
        <div className={styles.planetItem}>{planet.name}</div>
      </a>
    </Link>
  );
};

export default PlanetItem;
