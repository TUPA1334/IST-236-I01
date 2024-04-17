import { useEffect, useState } from "react";
import LocationList from "../components/Locations/LocationList";
import { useIsFocused } from "@react-navigation/native";

function AllLocations(props) {
  const [loadedLocations, setLoadedLocations] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && props.route.params) {
      setLoadedLocations((curLocations) => [
        ...curLocations,
        props.route.params.location,
      ]);
      
      // Clear params so that we don't accidentally add multiple copies
      props.route.params = null;
    }
  }, [isFocused]);

  return <LocationList locations={loadedLocations} />;
}

export default AllLocations;
