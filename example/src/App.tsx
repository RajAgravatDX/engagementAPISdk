import * as React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { multiply,login } from 'engagement-api-sdk';
import { getAvailableClasses, login } from 'engagement-api-sdk';
import { setAccessToken, setBaseUrl } from '../../src/config/config';

export default function App() {
  const callLoginApi = async () => {
    let response: any = await login({
      email: 'pawanraj@dxfactor.com',
      password: '76661005',
    });

    console.log('response==>', JSON.stringify(response, null, 2));
    if (response && response.status === 200) {
      setAccessToken(response?.data?.token?.access_token);
    }
  };

  const callGetClassesApi = async () => {
    let response = await getAvailableClasses({
      userID: 722959,
      externalApplicationID: 782,
      startDate: '2020-12-28 04:10:00',
      endDate: '2020-12-30 03:28:00',
      start: 1,
      count: 100,
    });
    console.log(
      'response_callGetClassesApi==>',
      JSON.stringify(response, null, 2)
    );
  };

  React.useEffect(() => {
    setBaseUrl('https://api.trzdev20.com/v03/');
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => callLoginApi()}
        style={styles.loginBtnStyle}
      >
        <Text style={styles.loginTextStyle}>login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => callGetClassesApi()}
        style={styles.loginBtnStyle}
      >
        <Text style={styles.loginTextStyle}>get available classes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  loginBtnStyle: {
    height: 40,
    backgroundColor: 'orange',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  loginTextStyle: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});
