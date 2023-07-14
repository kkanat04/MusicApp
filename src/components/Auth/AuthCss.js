import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    logo_block: {
        width: '100%',
    }, signIn: {}, checkBox: {
        alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginTop: 18
    }, logo: {
        resizeMode: "contain", width: '30%', alignSelf: 'center', marginVertical: 35
    }, auth_modal: {
        width: '95%', backgroundColor: '#fff', alignSelf: 'center', borderRadius: 15,
    }, input_address: {
        width: '85%'
    }, button: {
        width: '60%', // backgroundColor: '#000',
        alignSelf: 'center', marginVertical: 23, shadowColor: "#000", shadowOffset: {
            width: 0, height: 4,
        }, shadowOpacity: 0, shadowRadius: 4.65,

        elevation: 8,
    }, auth_modal_title: {
        textAlign: 'center', paddingTop: 40, fontSize: 18, fontWeight: 'bold'
    }, auth_modal_text: {
        textAlign: 'center', paddingTop: 10, fontSize: 14, fontWeight: '400', paddingBottom: 15
    }, eye_hidden: {
        resizeMode: "contain", width: '100%', left: 10
    }, auth_modal_input_address: {
        backgroundColor: '#fff',
        width: '90%',
        alignSelf: 'center',
        height: 50,
        borderWidth: 1,
        borderColor: '#E2E3F2',
        borderRadius: 8,
        marginTop: 10,
        paddingLeft: 20

    }, auth_modal_input_password: {
        marginTop: 10,
        backgroundColor: '#fff',
        width: '90%',
        alignSelf: 'center',
        height: 50,
        borderWidth: 1,
        borderColor: '#E2E3F2',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20
    }


});
