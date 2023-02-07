import { Text, View } from 'react-native';
import Styles from '../utils/global';

interface Props {
  title: string;
  value: string;
  size: string;
}
const RowText: React.FC<Props> = ({ title, value, size }) => {
  return (
    <View className='flex-row justify-between items-center'>
      <Text style={Styles.Regular} className={`text-${size}`}>
        {title}
      </Text>
      <Text style={Styles.SemiBold} className={`text-${size} text-gray-900`}>
        {value}
      </Text>
    </View>
  );
};

export default RowText;
