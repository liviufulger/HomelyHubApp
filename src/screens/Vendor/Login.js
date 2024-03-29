import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import VendorLayout from './VendorLayout';
import {FONTS, SIZES, COLORS, icons} from '../../constants';
import {FormInput, TextButton} from '../../components';
import {Switch} from 'react-native-paper';
import {Formik} from 'formik';
import * as yup from 'yup';

const Login = ({navigation}) => {
  const [rememberMe, setRememberMe] = React.useState(false);
  const [showPass, setShowPass] = React.useState(false);
  const onToggleSwitch = () => setRememberMe(!rememberMe);

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email address is required!'),
    password: yup
      .string()
      .min(6, ({min}) => `Password must be at least ${min} characters.`)
      .required('Password is required!'),
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   'Must contain One Uppercase, One Lowercase, One Number and One Special Case Character',
    // ),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validateOnMount={true}
      onSubmit={values => {
        const data = {
          userName: values.email,
          password: values.password,
          devideId: values.devideId,
          rememberMe,
        };
        alert(JSON.stringify(values));
      }}
      validationSchema={loginValidationSchema}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
        <VendorLayout
          title="Vendor Login"
          titleContainerStyle={{
            paddingHorizontal: SIZES.padding * 2,
            paddingVertical: SIZES.padding,
          }}
          subtitle="Login to your business profile using your email and password"
          header="Vendor Account"
          backButton={() => {}}
          formInput={
            <View>
              <FormInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                iconName="email"
                iconStyle={{paddingRight: SIZES.base}}
                iconSize={19}
                label="Email"
                customInputStyle={{backgroundColor: COLORS.white}}
                containerStyle={{paddingTop: SIZES.padding + 10}}
                errorMsg={
                  errors.email &&
                  touched.email && (
                    <Text
                      style={{
                        ...FONTS.body5,
                        color: COLORS.red,
                        marginTop: 5,
                      }}>
                      {errors.email}
                    </Text>
                  )
                }
                appendComponent={
                  <View style={{justifyContent: 'center'}}>
                    <Image
                      source={!errors.email ? icons.correct : icons.correct}
                      style={{
                        height: 20,
                        width: 20,
                        tintColor: !errors.email
                          ? COLORS.primary
                          : COLORS.gray2,
                      }}
                    />
                  </View>
                }
              />

              <FormInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                iconName="lock"
                iconStyle={{paddingRight: SIZES.base}}
                iconSize={19}
                label="Password"
                customInputStyle={{backgroundColor: COLORS.white}}
                containerStyle={{paddingTop: SIZES.base + 10}}
                secureTextEntry={!showPass}
                autoCompleteType="password"
                errorMsg={
                  errors.password &&
                  touched.password && (
                    <Text
                      style={{
                        ...FONTS.body5,
                        color: COLORS.red,
                        marginTop: 5,
                      }}>
                      {errors.password}
                    </Text>
                  )
                }
                appendComponent={
                  <TouchableOpacity
                    style={{
                      width: 40,
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                    }}
                    onPress={() => setShowPass(!showPass)}>
                    <Image
                      source={showPass ? icons.eye_close : icons.eye}
                      style={{height: 20, width: 20, tintColor: COLORS.gray}}
                    />
                  </TouchableOpacity>
                }
              />
            </View>
          }
          children={
            <View>
              {/* Save me & Forget passs */}

              <View
                style={{
                  paddingHorizontal: SIZES.padding + 10,
                  paddingTop: SIZES.base,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: SIZES.radius,
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Switch
                      value={rememberMe}
                      onValueChange={onToggleSwitch}
                      color="#1EB091"
                    />
                    <Text
                      style={{
                        ...FONTS.body4,
                      }}>
                      Remember Me
                    </Text>
                  </View>
                  <TextButton
                    label="Forgot Password"
                    buttonContainerStyle={{
                      backgroundColor: null,
                    }}
                    labelStyle={{
                      color: COLORS.gray,
                      ...FONTS.body4,
                    }}
                    onPress={() => navigation.navigate('ForgotPassword')}
                  />
                </View>
              </View>

              {/* Footer */}

              <View
                style={{
                  justifyContent: 'center',
                  flexDirection: 'row',
                  paddingTop: SIZES.radius,
                }}>
                <TextButton
                  label="Login"
                  buttonContainerStyle={{
                    height: 50,
                    width: SIZES.width / 2,
                    alignItems: 'center',
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.radius + 5,
                    backgroundColor: COLORS.primary,
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: SIZES.radius,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: COLORS.darkGray,
                    ...FONTS.body3,
                  }}>
                  Don't have an account?
                </Text>

                <TextButton
                  label="Register"
                  buttonContainerStyle={{
                    backgroundColor: null,
                    marginLeft: 3,
                  }}
                  labelStyle={{
                    ...FONTS.body3,
                    color: COLORS.green2,
                    fontWeight: 'bold',
                  }}
                  onPress={() => navigation.navigate('Register')}
                />
              </View>
            </View>
          }></VendorLayout>
      )}
    </Formik>
  );
};

export default Login;
