import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useRouter } from 'expo-router';
import tw from 'twrnc';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    Alert.alert('Success', 'Login Successful');
  };

  const handleRegister = () => {
    router.push('/screens/Register');
  };

  return (
    <View style={tw`flex-1 justify-center p-4 bg-gray-900`}>
      <Text style={tw`text-2xl mb-6 text-center text-white`}>Farmers Market Login</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={tw`mb-4 bg-gray-800 text-white`}
        keyboardType="email-address"
        autoCompleteType="email"
        textContentType="emailAddress"
        mode="outlined"
        theme={{ colors: { text: 'white', placeholder: 'gray', background: '#1F2937', primary: 'gray' } }}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={tw`mb-4 bg-gray-800 text-white`}
        secureTextEntry
        autoCompleteType="password"
        textContentType="password"
        mode="outlined"
        theme={{ colors: { text: 'white', placeholder: 'gray', background: '#1F2937', primary: 'gray' } }}
      />
      <TouchableOpacity onPress={handleLogin} style={tw`mt-5 p-4 rounded bg-blue-500`}>
        <Text style={tw`text-white text-lg font-bold`}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRegister} style={tw`mt-5 p-4 rounded border border-blue-500`}>
        <Text style={tw`text-blue-500 text-lg font-bold`}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;