import { Planet } from "../utils/types";
import styles from "../styles/Planet.module.css";
import Link from "next/link";

interface Props {
  planet: Planet;
}

const PlanetItem: React.FC<Props> = ({ planet }) => {
  return (
    <Link href={`/${planet.id}`}>
        <div className={styles.planetItem}>{planet.name}</div>
    </Link>
  );
};

export default PlanetItem;
