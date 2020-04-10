import React, { useState } from "react"
import { AuthenticatedLayout } from "components/layout"
import SEO from "components/seo"
import { ResultWrapper, BookHeader, ProfileContent } from "components/trip"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { toast } from "react-toastify"
import { navigate } from "gatsby"
import { values as ObjValues } from "../../node_modules/lodash"
import { updateProfileRequest } from "../store/actions/common"

const Profile = props => {
  const stateExtractor = ({ common: { user } }) => ({ user })
  const dispatch = useDispatch()
  const { user } = useSelector(stateExtractor, shallowEqual)
  const [loading, setLoading] = useState(false)

  const _handleCancel = () => navigate("../")

  const _handleSave = async data => {
    if (loading) return null
    let fieldsEmpty = ObjValues(data).filter(item => item.length <= 0)
    if (fieldsEmpty.length > 0) {
      return toast.warn("Field(s) can not be empty ")
    }
    setLoading(true)

    try {
      await dispatch(updateProfileRequest(data))
      toast.success("Profile updated successfully")
      setLoading(false)
    } catch (error) {
      toast.error("Profile update unsuccessful")
      setLoading(false)
    }
  }

  return (
    <AuthenticatedLayout {...props}>
      <SEO title="Profile" />
      <BookHeader
        stage={0}
        breadCrumbs={["Edit Profile"]}
        hideBreadCrumbsOnMobile
      />
      <ResultWrapper>
        <ProfileContent
          user={user}
          onSave={_handleSave}
          onCancel={_handleCancel}
          loading={loading}
        />
      </ResultWrapper>
    </AuthenticatedLayout>
  )
}

export default Profile
