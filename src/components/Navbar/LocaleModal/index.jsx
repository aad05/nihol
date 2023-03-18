import { Avatar, Modal, Segmented } from "antd";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { CenteredWrapper } from "../../../Generic/Styles";
import { switchLocaleModalVisibility } from "../../../redux/modalSlice";
import i18n from "i18next";
import { switchLanguage } from "../../../redux/localeSlice";

const LocaleModal = () => {
  const { lang } = useSelector((state) => state.locale);
  const dispatch = useDispatch();
  const { localeModalVisibitlity } = useSelector((state) => state.modal);
  const { t } = useTranslation();

  const changeLanguageHandler = () => {
    i18n.changeLanguage(lang);
    dispatch(switchLocaleModalVisibility());
  };

  return (
    <Modal
      title={t("home.home_locale_modal_title")}
      open={localeModalVisibitlity}
      onCancel={() => dispatch(switchLocaleModalVisibility())}
      cancelText={t("modal.modal_canceling")}
      okText={t("modal.modal_edit")}
      onOk={() => changeLanguageHandler()}
    >
      <CenteredWrapper>
        <Segmented
          defaultValue={lang}
          size="large"
          options={[
            {
              label: (
                <div
                  style={{
                    padding: 4,
                  }}
                >
                  <Avatar src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/255px-Flag_of_the_United_States.svg.png" />
                  <div>{t("home.home_locale_modal_english")}</div>
                </div>
              ),
              value: "en",
            },
            {
              label: (
                <div
                  style={{
                    padding: 4,
                  }}
                >
                  <Avatar src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png">
                    K
                  </Avatar>
                  <div>{t("home.home_locale_modal_russian")}</div>
                </div>
              ),
              value: "ru",
            },
            {
              label: (
                <div
                  style={{
                    padding: 4,
                  }}
                >
                  <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/255px-Flag_of_Uzbekistan.svg.png" />
                  <div>{t("home.home_locale_modal_uzlotin")}</div>
                </div>
              ),
              value: "uzLotin",
            },
            {
              label: (
                <div
                  style={{
                    padding: 4,
                  }}
                >
                  <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/255px-Flag_of_Uzbekistan.svg.png" />
                  <div>{t("home.home_locale_modal_uzkrill")}</div>
                </div>
              ),
              value: "uzKrill",
            },
          ]}
          onChange={(lang) => {
            // i18n.changeLanguage(lang);
            dispatch(switchLanguage(lang));
          }}
        />
      </CenteredWrapper>
    </Modal>
  );
};

export default LocaleModal;
