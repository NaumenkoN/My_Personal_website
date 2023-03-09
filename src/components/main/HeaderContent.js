import CodeStrip from './CodeStrip';
import MainInfo from './MainInfo';

const HeaderContext = ({ closeNavBar }) => {
    return (
        <>
            <MainInfo closeNavBar={closeNavBar} />
            <CodeStrip />
        </>
    );
};

export default HeaderContext;
