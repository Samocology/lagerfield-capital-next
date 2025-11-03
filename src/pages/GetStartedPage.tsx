import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

const GetStartedPage = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    goal: '',
    riskTolerance: '',
    timeHorizon: '',
    institutionType: '',
  });
  const [recommendation, setRecommendation] = useState('');

  const handleAnswer = (question: string, value: string) => {
    setAnswers(prev => ({ ...prev, [question]: value }));
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const generateRecommendation = () => {
    let rec = '';
    if (answers.goal === 'Grow Wealth' || answers.goal === 'Preserve Capital') {
      if (answers.riskTolerance === 'High') {
        rec = 'Fund Management';
      } else if (answers.riskTolerance === 'Medium' || answers.riskTolerance === 'Low') {
        rec = 'Portfolio Advisory';
      }
    } else if (answers.goal === 'Plan for Retirement') {
      rec = 'Wealth Planning';
    } else if (answers.goal === 'Manage Institutional Funds') {
      rec = 'Institutional Investments';
    } else {
      rec = 'Contact Us for a personalized consultation';
    }
    setRecommendation(rec);
    setStep(5); // Go to results step
  };

  const getServicePath = (serviceName: string) => {
    if (serviceName === 'Contact Us for a personalized consultation') {
      return '/contact';
    }
    return `/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <div className="container mx-auto py-16 px-4 min-h-[calc(100vh-80px)] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center mb-8">Get Started</h1>
      <div className="w-full max-w-2xl mb-8">
        <Progress value={(step / 5) * 100} className="w-full" />
      </div>

      {step === 1 && (
        <div className="w-full max-w-2xl bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Step 1 of 5: What is your primary financial goal?</h2>
          <RadioGroup onValueChange={(value) => handleAnswer('goal', value)} value={answers.goal}>
            <div className="flex items-center space-x-2 mb-4">
              <RadioGroupItem value="Grow Wealth" id="goal-grow" />
              <Label htmlFor="goal-grow">Grow Wealth</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <RadioGroupItem value="Preserve Capital" id="goal-preserve" />
              <Label htmlFor="goal-preserve">Preserve Capital</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <RadioGroupItem value="Plan for Retirement" id="goal-retirement" />
              <Label htmlFor="goal-retirement">Plan for Retirement</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <RadioGroupItem value="Manage Institutional Funds" id="goal-institutional" />
              <Label htmlFor="goal-institutional">Manage Institutional Funds</Label>
            </div>
          </RadioGroup>
          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={prevStep} disabled>Previous</Button>
            <Button onClick={nextStep} disabled={!answers.goal}>Next</Button>
          </div>
        </div>
      )}

      {step === 2 && (answers.goal === 'Grow Wealth' || answers.goal === 'Preserve Capital') && (
        <div className="w-full max-w-2xl bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Step 2 of 5: What is your risk tolerance?</h2>
          <RadioGroup onValueChange={(value) => handleAnswer('riskTolerance', value)} value={answers.riskTolerance}>
            <div className="flex items-center space-x-2 mb-4">
              <RadioGroupItem value="Low" id="risk-low" />
              <Label htmlFor="risk-low">Low</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <RadioGroupItem value="Medium" id="risk-medium" />
              <Label htmlFor="risk-medium">Medium</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <RadioGroupItem value="High" id="risk-high" />
              <Label htmlFor="risk-high">High</Label>
            </div>
          </RadioGroup>
          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={prevStep}>Previous</Button>
            <Button onClick={nextStep} disabled={!answers.riskTolerance}>Next</Button>
          </div>
        </div>
      )}

      {step === 2 && answers.goal === 'Plan for Retirement' && (
        <div className="w-full max-w-2xl bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Step 2 of 5: What is your time horizon for retirement?</h2>
          <RadioGroup onValueChange={(value) => handleAnswer('timeHorizon', value)} value={answers.timeHorizon}>
            <div className="flex items-center space-x-2 mb-4">
              <RadioGroupItem value="Short-term (0-5 years)" id="time-short" />
              <Label htmlFor="time-short">Short-term (0-5 years)</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <RadioGroupItem value="Medium-term (5-15 years)" id="time-medium" />
              <Label htmlFor="time-medium">Medium-term (5-15 years)</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <RadioGroupItem value="Long-term (15+ years)" id="time-long" />
              <Label htmlFor="time-long">Long-term (15+ years)</Label>
            </div>
          </RadioGroup>
          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={prevStep}>Previous</Button>
            <Button onClick={nextStep} disabled={!answers.timeHorizon}>Next</Button>
          </div>
        </div>
      )}

      {step === 2 && answers.goal === 'Manage Institutional Funds' && (
        <div className="w-full max-w-2xl bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Step 2 of 5: What type of institution do you represent?</h2>
          <RadioGroup onValueChange={(value) => handleAnswer('institutionType', value)} value={answers.institutionType}>
            <div className="flex items-center space-x-2 mb-4">
              <RadioGroupItem value="Endowment" id="inst-endowment" />
              <Label htmlFor="inst-endowment">Endowment</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <RadioGroupItem value="Foundation" id="inst-foundation" />
              <Label htmlFor="inst-foundation">Foundation</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <RadioGroupItem value="Pension Fund" id="inst-pension" />
              <Label htmlFor="inst-pension">Pension Fund</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <RadioGroupItem value="Corporate" id="inst-corporate" />
              <Label htmlFor="inst-corporate">Corporate</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <RadioGroupItem value="Other" id="inst-other" />
              <Label htmlFor="inst-other">Other</Label>
            </div>
          </RadioGroup>
          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={prevStep}>Previous</Button>
            <Button onClick={nextStep} disabled={!answers.institutionType}>Next</Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="w-full max-w-2xl bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Step 3 of 5: Summary of your choices:</h2>
          <p className="mb-2"><strong>Primary Goal:</strong> {answers.goal}</p>
          {answers.riskTolerance && <p className="mb-2"><strong>Risk Tolerance:</strong> {answers.riskTolerance}</p>}
          {answers.timeHorizon && <p className="mb-2"><strong>Time Horizon:</strong> {answers.timeHorizon}</p>}
          {answers.institutionType && <p className="mb-2"><strong>Institution Type:</strong> {answers.institutionType}</p>}
          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={prevStep}>Previous</Button>
            <Button onClick={generateRecommendation}>Get Recommendation</Button>
          </div>
        </div>
      )}

      {step === 5 && (
        <Card className="w-full max-w-2xl p-8 text-center">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold mb-2">Step 5 of 5: Your Recommended Service:</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">Based on your answers, we recommend the following service:</p>
            <p className="text-xl text-primary font-bold mb-8">{recommendation}</p>
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <Link to={getServicePath(recommendation)}>
              <Button size="lg">Learn More</Button>
            </Link>
            <Button variant="link" onClick={() => setStep(1)} className="mt-4">Start Over</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default GetStartedPage;
