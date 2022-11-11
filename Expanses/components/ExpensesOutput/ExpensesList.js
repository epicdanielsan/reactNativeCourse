import { FlatList, View } from "react-native";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => {
  const renderExpenseItem = (itemData) => {
    return <ExpenseItem {...itemData.item} />;
  };

  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ExpensesList;
