import { Text, View, TextInput } from '../../components/themed/Themed';
import { Button } from '@rneui/themed';
import { RootStackScreenProps } from '../../types';

import React, { useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { setUser } from '../../lib/redux/userSlice';
import { useAppSelector, useAppDispatch } from '../../lib/redux/hooks';
import ScreenWrapper from '../../components/ScreenWrapper';

WebBrowser.maybeCompleteAuthSession();

export default function SigninScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
    const [request, response, promptAsync] = Google.useAuthRequest({
      expoClientId: '977831067057-ngoegrepovtd9l37a1b02qbdnlsff197.apps.googleusercontent.com'
    });
    const dispatch = useAppDispatch();
    
    async function getUserData(accessToken: string) {
      let userInfoResp = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      userInfoResp.json().then((data) => {
        dispatch(setUser({
          email: data['email'],
          familyName: data['family_name'],
          givenName: data['given_name'],
          pictureUrl: data['picture']
        }))
      })
    }

    React.useEffect(() => {
      if (response?.type === 'success') {
        getUserData(response.authentication!.accessToken)
      }
    }, [response]);

    return (
      <ScreenWrapper>
        <Button
          disabled={!request}
          title="Login"
          onPress={() => {
            promptAsync({ showInRecents:true });
          }}
        />
      </ScreenWrapper>
    );
}