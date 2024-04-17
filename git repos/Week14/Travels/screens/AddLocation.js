import LocationForm from "../components/Locations/LocationForm";

function AddLocation(props) {
  function createLocationHandler(location) {
    props.navigation.navigate("AllLocations", {
      location: location,
    });
  }

  return <LocationForm onCreateLocation={createLocationHandler} />;
}

export default AddLocation;
