
import { StyleSheet} from "react-native";


const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    alignItems: "center", // centers cards horizontally
  },
  card: {
    width: "85%",          // control width
    maxWidth: 400,         // prevents too wide on tablet
    borderRadius: 20,      // nicer rounded square
    marginBottom: 20,
    elevation: 4,          // Android shadow
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,   // increase height
    paddingHorizontal: 16,
    gap: 20,
  },
  textContainer: {
    flex: 1,
  },
});

export default styles ; 