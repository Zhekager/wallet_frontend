import React from 'react';
import zxcvbn from 'zxcvbn';

const PasswordStrenghtMeter = ({ password }) => {
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;
  const funcProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return '#FF6596';
      case 1:
        return '#FF6596';
      case 2:
        return '#FF6596';
      case 3:
        return '#24CCA7';
      case 4:
        return '#24CCA7';
      default:
        return 'none';
    }
  };

  const createPasswordLabel = () => {
    switch (testResult.score) {
      case 0:
        return '';
      case 1:
        return 'Weak';
      case 2:
        return 'Fear';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      default:
        return '';
    }
  };

  // #24CCA7

  const changeStyleProgress = () => ({
    width: '100%',
    height: '4px',
    // marginBottom: '20px',
    marginTop: '-15px',
  });

  const changePasswordColor = () => ({
    width: `${num}%`,
    height: '4px',
    // background: '#24CCA7',
    background: funcProgressColor(),
  });

  return (
    <>
      <div className="progress" style={changeStyleProgress()}>
        <div className="progress-bar" style={changePasswordColor()}></div>
      </div>
      <p style={{ color: funcProgressColor() }}>{createPasswordLabel()}</p>
    </>
  );
};

export default PasswordStrenghtMeter;
