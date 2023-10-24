import { SelectList } from "@components/SelectList";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { View } from "react-native";

describe("Component : SelectList ", () => {
  it("should be retune city details selected", () => {
    const data = [
      {
        id: "1",
        name: "Rolandia",
        latitude: 123,
        longitude: 456,
      },
      {
        id: "2",
        name: "Londrina",
        latitude: 789,
        longitude: 987,
      },
    ];

    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectedCity = screen.getByText("Rolandia");
    // const selectedCity = screen.getByText(/Rolan/i);
    // const selectedCity = screen.getByText("Rolandia", { exact: false });
    fireEvent.press(selectedCity);
    expect(onPress).toBeCalledWith(data[0]);
  });

  it("not be should be show options when data props is empty", () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />);
    const options: View = screen.getByTestId("options");
    expect(options.props.children).toHaveLength(0);
  });
});
