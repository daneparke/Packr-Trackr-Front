import React from 'react'
import { View, StyleSheet, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import homeImage from '../assets/prism.png'
import myImage from '../assets/My_headershot.png'
import { connect } from 'react-redux'
import logo from '../assets/PTlogo.png'


class Profile extends React.Component {
    render() {
        return (
            <View>
                <ImageBackground source={homeImage} style={styles.baseImage}>
                    <View style={styles.lighterBG}>
                        <View style={styles.logoMoving}>
                            <Image style={styles.logo} source={logo} />
                        </View>
                        <View style={styles.movingEditButton}>
                            <TouchableOpacity onPress={() => Actions.editProfile()} style={styles.editProfileButton}>
                                <Text style={styles.editText}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                        <Image style={styles.profileImage} source={{ uri: this.props.currentUser.profile_image }} />
                        <View style={styles.profileContainer}>
                            <View style={styles.profileInfo}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.textStyling}>Status: </Text>
                                    <Text style={{ fontSize: 18 }}>{`${this.props.currentUser.travel_status ? 'Traveling' : 'Saving To Travel'}`}</Text>
                                </View>
                                {/* <Text>Current Town</Text>
                            <Text>Current Hostel</Text> */}
                                <Text style={styles.textStyling}>About Me:</Text>
                                <Text style={{ fontSize: 18 }}>{this.props.currentUser.about_me}</Text>
                            </View>
                            <View style={styles.tripButtonsSpacing}>
                                <TouchableOpacity style={styles.tripButtonPast}>
                                    <Text>Past Trips</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.tripButtonCurrent}>
                                    <Text>Current Trip</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    profileImage: {
        marginTop: -65,
        height: 180,
        width: 180,
        borderRadius: 90
    },
    tripButtonsSpacing: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    movingEditButton: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '100%',
        marginTop: -12
    },
    editText: {
        textAlign: 'center',
    },
    editProfileButton: {
        width: 50,
        height: 40,
        backgroundColor: '#EB7F2E',
        borderRadius: 3,
        borderWidth: 1,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 1,
        margin: 2,
    },
    tripButtonCurrent: {
        width: 110,
        height: 60,
        backgroundColor: '#EB7F2E',
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 1,
    },
    tripButtonPast: {
        width: 110,
        height: 60,
        backgroundColor: 'rgb(189, 106, 43)',
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 1,
    },
    profileContainer: {
        width: '80%',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: 'rgba(128, 128, 128, 0.96)',
        borderRadius: 5,
        shadowColor: '#EB7F2E',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 1,
        marginTop: 15,
        // justifyContent: 'flex-end',
        justifyContent: 'space-between',
        // marginBottom: 40,
        // backgroundColor: 'rgba(197, 180, 158, 0.95)',
        // borderWidth: 5,
        // borderColor: 'rgba(78, 78, 78, 0.9)',
        height: 280,
        // width: 250,

    },
    baseImage: {
        height: '120%',
        alignItems: 'center',
        paddingTop: 5
    },
    profileInfo: {
        // alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 30,
        paddingLeft: 30,
    },
    textStyling: {
        fontWeight: 'bold',
        fontSize: 18
    },
    // logo: {
    //     width: 226,
    //     height: 69,
    // },
    // logoMoving: {
    //     marginTop: 12
    // },
    logoMoving: {
        width: '100%',
        alignItems: 'flex-end',
        paddingRight: 10,
        marginTop: 8
    },
    logo: {
        height: 88,
        width: 76,
    },
    lighterBG: {
        backgroundColor: 'rgba(250, 250, 250, 0.04)',
        height: '100%',
        width: '100%',
        alignItems: 'center'
    }

})

const mapStateToProps = state => {
    return {
        currentUser: state.users.currentUser,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        // onAddUsername: (username) => dispatch(addUsername(username)),
        // onAddPassword: (password) => dispatch(addPassword(password)),
        // onAddUser: (username, password) => dispatch(submitUser(username, password)),
        // onAddEmail: (email) => dispatch(addEmail(email)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
