import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
  titleSubtext: {
    color: '#ccc',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    marginHorizontal: 20,
    borderColor: '#e7e7e7',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#d4d4d4',
  },
  buttonText: {
    marginHorizontal: 20,
    fontSize: 20,
    color: '#5d5d5d',
  },
  incrementorText: {
    fontSize: 20,
  },
});

export default styles;
