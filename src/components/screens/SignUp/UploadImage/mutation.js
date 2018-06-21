import gql from 'graphql-tag';

const UpdateImagesMutation = gql`
    mutation updateImageMerchant($id:Int, $brandingImage:String,$brandingName: String,$brandingDetail: String){
        updateImageMerchant(id:$id, brandingImage:$brandingImage,brandingName:$brandingName, brandingDetail:$brandingDetail){
            id
        }
    }
`;

export default UpdateImagesMutation;
