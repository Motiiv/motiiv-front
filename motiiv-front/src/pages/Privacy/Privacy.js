import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    margin : 5rem;
    font-family: 'Spoqa-Han-Sans';
`

const Title = styled.div`
  font-size: 2.5rem;
  margin-bottom:2.5rem;
  font-weight: 700;
`

const ContentContainer = styled.div`
    margin-top : 5rem;
    margin-bottom: 5rem;
`

const SubTitle = styled.div`
  font-weight: 700;
  font-size: 1.7rem;
  margin-bottom: 1.5rem;
  line-height : 1.2;
`

const Content = styled.div`
  font-size: 1.5rem;
  font-weight: 100;
  line-height : 1.5;
`

function Privacy() {
    const content = "<모티브>('http://www.motiiv.site'이하 '모티브')은(는) 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.\n<모티브>('모티브') 은(는) 회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.\n* 본 방침은부터 2020년 12월 31일부터 시행됩니다."

    const subtitle1 = "1. 개인정보의 처리 목적 <모티브>('http://www.motiiv.site'이하 '모티브')은(는) 개인정보를 다음의 목적을 위해 처리합니다.\n처리한 개인정보는 다음의 목적이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전동의를 구할 예정입니다."
    const content1 = "가. 홈페이지 회원가입 및 관리\n회원 가입의사 확인, 서비스 부정이용 방지 등을 목적으로 개인정보를 처리합니다."

    const subtitle2 = "2. 개인정보 파일 현황"
    const content2 = "1. 개인정보 파일명 : 모티브\n* 개인정보 항목 : 비밀번호, 로그인ID, 이름\n* 수집방법 : 홈페이지\n* 보유근거 : 회원가입\n* 보유기간 : 1년\n* 관련법령 : 신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년"


    const subtitle3 = "3. 개인정보의 처리 및 보유 기간"
    const content3 = "① <모티브>('모티브')은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집시에 동의 받은 개인정보 보유,이용기간 내에서 개인정보를 처리,보유합니다.\n\n② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.\n\n1.<홈페이지 회원가입 및 관리>\n<홈페이지 회원가입 및 관리>와 관련한 개인정보는 수집.이용에 관한 동의일로부터<1년>까지 위 이용목적을 위하여 보유.이용됩니다.\n보유근거 : 회원가입\n관련법령 : 신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년\n예외사유 :"

    const subtitle4 = "4. 개인정보의 제3자 제공에 관한 사항"
    const content4 = "① <모티브>('http://www.motiiv.site'이하 '모티브')은(는) 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.\n\n② <모티브>('http://www.motiiv.site')은(는) 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.\n1. <>\n개인정보를 제공받는 자 :\n제공받는 자의 개인정보 이용목적 :\n제공받는 자의 보유.이용기간:"

    const subtitle5 = "5. 개인정보처리 위탁"
    const content5 = "① <모티브>('모티브')은(는) 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.\n1. <>\n위탁받는 자 (수탁자) :\n위탁하는 업무의 내용 :\n위탁기간 :\n\n② <모티브>('http://www.motiiv.site'이하 '모티브')은(는) 위탁계약 체결시 개인정보 보호법 제25조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적․관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.\n\n③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다."

    const subtitle6 = "6. 정보주체와 법정대리인의 권리·의무 및 그 행사방법 이용자는 개인정보주체로써 다음과 같은 권리를 행사할 수 있습니다."
    const content6 = "① 정보주체는 모티브에 대해 언제든지 개인정보 열람,정정,삭제,처리정지 요구 등의 권리를 행사할 수 있습니다.\n\n② 제1항에 따른 권리 행사는모티브에 대해 개인정보 보호법 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 모티브은(는) 이에 대해 지체 없이 조치하겠습니다.\n\n③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.\n\n④ 개인정보 열람 및 처리정지 요구는 개인정보보호법 제35조 제5항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.\n\n⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.\n\n⑥ 모티브은(는) 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다."

    const subtitle7 = "7. 처리하는 개인정보의 항목 작성"
    const content7 = "① <모티브>('http://www.motiiv.site'이하 '모티브')은(는) 다음의 개인정보 항목을 처리하고 있습니다.\n1. <홈페이지 회원가입 및 관리>\n필수항목 : 비밀번호, 로그인ID, 이름\n- 선택항목 :"

    const subtitle8 = "8. 개인정보의 파기<모티브>('모티브')은(는) 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체없이 해당 개인정보를 파기합니다. 파기의 절차, 기한 및 방법은 다음과 같습니다."
    const content8 = "-파기절차\n이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.\n\n-파기기한\n이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다.\n\n-파기방법\n전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다"

    const subtitle9 = "9. 개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항"
    const content9 = "① 모티브 은 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠기(cookie)’를 사용합니다. ② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다. 가. 쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다. 나. 쿠키의 설치•운영 및 거부 : 웹브라우저 상단의 도구>인터넷 옵션>개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다. 다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다."

    const subtitle10 = "10. 개인정보 보호책임자 작성"
    const content10 = "① 모티브(‘http://www.motiiv.site’이하 ‘모티브) 은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.\n\n▶ 개인정보 보호책임자\n성명 :이동훈\n직책 :대표\n직급 :대표\n연락처 :010-2389-7192, ehdgns1766@naver.com,\n※ 개인정보 보호 담당부서로 연결됩니다.\n\n▶ 개인정보 보호 담당부서\n부서명 :\n담당자 :\n연락처 :\n\n② 정보주체께서는 모티브(‘http://www.motiiv.site’이하 ‘모티브) 의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 모티브(‘http://www.motiiv.site’이하 ‘모티브) 은(는) 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다."

    const subtitle11 = "11. 개인정보 처리방침 변경"
    const content11 = "①이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다."

    const subtitle12 = "12. 개인정보의 안전성 확보 조치 <모티브>('모티브')은(는) 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다."
    const content12 = "1. 정기적인 자체 감사 실시\n개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체 감사를 실시하고 있습니다.\n\n2. 개인정보 취급 직원의 최소화 및 교육\n개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.\n\n3. 개인정보의 암호화\n이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.\n\n4. 접속기록의 보관 및 위변조 방지\n개인정보처리시스템에 접속한 기록을 최소 6개월 이상 보관, 관리하고 있으며, 접속 기록이 위변조 및 도난, 분실되지 않도록 보안기능 사용하고 있습니다.\n\n5. 개인정보에 대한 접근 제한\n개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다."



    return (
        <Container>
            <Title>개인 정보 처리 방침</Title>
            <Content>{content.split('\n').map(line => { return (<span>{line}<br /></span>) })}</Content>

            <ContentContainer>
                <SubTitle>{subtitle1.split('\n').map(line => { return (<span>{line}<br /></span>) })}</SubTitle>
                <Content>{content1.split('\n').map(line => { return (<span>{line}<br /></span>) })}</Content>
            </ContentContainer>

            <ContentContainer>
                <SubTitle>{subtitle2.split('\n').map(line => { return (<span>{line}<br /></span>) })}</SubTitle>
                <Content>{content2.split('\n').map(line => { return (<span>{line}<br /></span>) })}</Content>
            </ContentContainer>

            <ContentContainer>
                <SubTitle>{subtitle3.split('\n').map(line => { return (<span>{line}<br /></span>) })}</SubTitle>
                <Content>{content3.split('\n').map(line => { return (<span>{line}<br /></span>) })}</Content>
            </ContentContainer>

            <ContentContainer>
                <SubTitle>{subtitle4.split('\n').map(line => { return (<span>{line}<br /></span>) })}</SubTitle>
                <Content>{content4.split('\n').map(line => { return (<span>{line}<br /></span>) })}</Content>
            </ContentContainer>

            <ContentContainer>
                <SubTitle>{subtitle5.split('\n').map(line => { return (<span>{line}<br /></span>) })}</SubTitle>
                <Content>{content5.split('\n').map(line => { return (<span>{line}<br /></span>) })}</Content>
            </ContentContainer>

            <ContentContainer>
                <SubTitle>{subtitle6.split('\n').map(line => { return (<span>{line}<br /></span>) })}</SubTitle>
                <Content>{content6.split('\n').map(line => { return (<span>{line}<br /></span>) })}</Content>
            </ContentContainer>

            <ContentContainer>
                <SubTitle>{subtitle7.split('\n').map(line => { return (<span>{line}<br /></span>) })}</SubTitle>
                <Content>{content7.split('\n').map(line => { return (<span>{line}<br /></span>) })}</Content>
            </ContentContainer>

            <ContentContainer>
                <SubTitle>{subtitle8.split('\n').map(line => { return (<span>{line}<br /></span>) })}</SubTitle>
                <Content>{content8.split('\n').map(line => { return (<span>{line}<br /></span>) })}</Content>
            </ContentContainer>

            <ContentContainer>
                <SubTitle>{subtitle9.split('\n').map(line => { return (<span>{line}<br /></span>) })}</SubTitle>
                <Content>{content9.split('\n').map(line => { return (<span>{line}<br /></span>) })}</Content>
            </ContentContainer>

            <ContentContainer>
                <SubTitle>{subtitle10.split('\n').map(line => { return (<span>{line}<br /></span>) })}</SubTitle>
                <Content>{content10.split('\n').map(line => { return (<span>{line}<br /></span>) })}</Content>
            </ContentContainer>

            <ContentContainer>
                <SubTitle>{subtitle11.split('\n').map(line => { return (<span>{line}<br /></span>) })}</SubTitle>
                <Content>{content11.split('\n').map(line => { return (<span>{line}<br /></span>) })}</Content>
            </ContentContainer>

            <ContentContainer>
                <SubTitle>{subtitle12.split('\n').map(line => { return (<span>{line}<br /></span>) })}</SubTitle>
                <Content>{content12.split('\n').map(line => { return (<span>{line}<br /></span>) })}</Content>
            </ContentContainer>
        </Container>
    )
}

export default Privacy
