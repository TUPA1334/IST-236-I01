const [currentScreen, setCurrentScreen] = useState("");
const [currentPrice, setCurrentPrice] = useState(0);

const repairTimeRadioButtons = useMemo(
  () => [
    {
      id: "0",
      label: "Standard",
      value: "Standard",
      price: 0,
      borderColor: Colors.primary500,
      color: Colors.primary500,
    },
    {
      id: "1",
      label: "Expedited",
      value: "Expedited",
      price: 50,
      borderColor: Colors.primary500,
      color: Colors.primary500,
    },
    {
      id: "2",
      label: "Next Day",
      value: "Next Day",
      price: 100,
      borderColor: Colors.primary500,
      color: Colors.primary500,
    },
  ],
  []
);

const [repairTimeId, setRepairTimeId] = useState(0);
const [services, setServices] = useState([
  { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
  { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
  { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
  { id: 3, name: "Brake Servicing", value: false, price: 50 },
  { id: 4, name: "Gear Servicing", value: false, price: 40 },
  { id: 5, name: "Chain Servicing", value: false, price: 15 },
  { id: 6, name: "Frame Repair", value: false, price: 35 },
  { id: 7, name: "Safety Check", value: false, price: 25 },
  { id: 8, name: "Accessory Install", value: false, price: 10 },
]);

const [newsletter, setNewsletter] = useState(false);
const [rentalMembership, setRentalMembership] = useState(false);
