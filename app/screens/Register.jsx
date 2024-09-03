import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, Animated } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useRouter } from 'expo-router';
import tw from 'twrnc';

const RegisterScreen = () => {
  const [userType, setUserType] = useState('farmer'); // Default user type
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();
  
  // Animated button styles
  const [animation] = useState(new Animated.Value(1));

  const handleRegister = () => {
    if (email === '' || password === '' || confirmPassword === '') {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    // Add your registration logic here
    Alert.alert('Success', 'Registration Successful');

    // Navigate to the login screen after successful registration
    router.push('/screens/Login');
  };

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 0.95,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animatedStyle = {
    transform: [{ scale: animation }],
  };

  return (
    <View style={tw`flex-1 justify-center p-4 bg-gray-900`}>
      <Text style={tw`text-2xl font-bold mb-6 text-center text-white`}>Register</Text>

      {/* Toggle Buttons */}
      <View style={tw`flex-row justify-center mb-6`}>
        <TouchableOpacity
          style={tw`p-3 m-1.5 rounded-full border-2 ${userType === 'farmer' ? 'bg-blue-700' : 'bg-gray-800'} border-blue-300 shadow`}
          onPress={() => setUserType('farmer')}
        >
          <Text style={tw`text-base text-white`}>Farmer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`p-3 m-1.5 rounded-full border-2 ${userType === 'retailer' ? 'bg-blue-700' : 'bg-gray-800'} border-blue-300 shadow`}
          onPress={() => setUserType('retailer')}
        >
          <Text style={tw`text-base text-white`}>Retailer</Text>
        </TouchableOpacity>
      </View>

      {/* Conditional Form Rendering */}
      <View style={tw`mt-4 p-5 rounded-lg bg-gray-800 shadow-lg`}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={tw`mb-4 bg-gray-700 text-white`}
          keyboardType="email-address"
          autoCompleteType="email"
          textContentType="emailAddress"
          mode="outlined"
          theme={{ colors: { text: 'white', placeholder: 'gray', background: '#2d3748', primary: 'gray' } }}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          style={tw`mb-4 bg-gray-700 text-white`}
          secureTextEntry
          autoCompleteType="password"
          textContentType="password"
          mode="outlined"
          theme={{ colors: { text: 'white', placeholder: 'gray', background: '#2d3748', primary: 'gray' } }}
        />
        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={tw`mb-4 bg-gray-700 text-white`}
          secureTextEntry
          autoCompleteType="password"
          textContentType="password"
          mode="outlined"
          theme={{ colors: { text: 'white', placeholder: 'gray', background: '#2d3748', primary: 'gray' } }}
        />
        <Text style={tw`text-lg my-3 text-center text-white`}>Role: {userType.charAt(0).toUpperCase() + userType.slice(1)}</Text>
        <Animated.View style={animatedStyle}>
          <TouchableOpacity onPress={() => { animateButton(); handleRegister(); }} style={tw`mt-5 p-4 rounded bg-blue-600 items-center`}>
            <Text style={tw`text-white text-lg font-bold`}>Register</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>

      <View style={tw`mt-5 flex-row justify-center`}>
        <Text style={tw`text-lg text-white`}>Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push('/screens/Login')}>
          <Text style={tw`text-lg text-blue-400 underline font-bold`}>Go to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;