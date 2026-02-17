import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreditCard, Check } from "lucide-react";

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  total: number;
}

const CheckoutDialog = ({ open, onOpenChange, total }: CheckoutDialogProps) => {
  const [step, setStep] = useState<"details" | "payment" | "confirmation">(
    "details",
  );
  const [detailsErrors, setDetailsErrors] = useState<Record<string, string>>(
    {},
  );
  const [paymentErrors, setPaymentErrors] = useState<Record<string, string>>(
    {},
  );
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });
  const [paymentData, setPaymentData] = useState({
    cardName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    paymentMethod: "credit-card",
  });

  const handleDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const handlePaymentMethodChange = (value: string) => {
    setPaymentData({ ...paymentData, paymentMethod: value });
  };

  const isDetailsValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phone &&
      formData.address &&
      formData.city &&
      formData.state &&
      formData.zipCode &&
      formData.country
    );
  };

  const validateDetailsForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errors.email = "Please enter a valid email";
    if (!formData.phone) errors.phone = "Phone number is required";
    if (!formData.address) errors.address = "Address is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.state) errors.state = "State is required";
    if (!formData.zipCode) errors.zipCode = "ZIP code is required";
    if (!formData.country) errors.country = "Country is required";

    setDetailsErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isPaymentValid = () => {
    if (paymentData.paymentMethod === "credit-card") {
      return (
        paymentData.cardName &&
        paymentData.cardNumber.length === 16 &&
        paymentData.expiryMonth &&
        paymentData.expiryYear &&
        paymentData.cvv.length === 3
      );
    }
    return true;
  };

  const validatePaymentForm = () => {
    const errors: Record<string, string> = {};

    if (paymentData.paymentMethod.includes("card")) {
      if (!paymentData.cardName)
        errors.cardName = "Cardholder name is required";
      if (!paymentData.cardNumber)
        errors.cardNumber = "Card number is required";
      else if (paymentData.cardNumber.length !== 16)
        errors.cardNumber = "Card number must be 16 digits";
      if (!paymentData.expiryMonth) errors.expiryMonth = "Month is required";
      if (!paymentData.expiryYear) errors.expiryYear = "Year is required";
      if (!paymentData.cvv) errors.cvv = "CVV is required";
      else if (paymentData.cvv.length !== 3)
        errors.cvv = "CVV must be 3 digits";
    }

    setPaymentErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateDetailsForm()) {
      setStep("payment");
    }
  };

  const handleProcessPayment = () => {
    // Validate payment form first
    if (validatePaymentForm()) {
      // Hardcoded: Payment always succeeds
      setStep("confirmation");
      setTimeout(() => {
        onOpenChange(false);
        resetForm();
      }, 2000);
    }
  };

  const resetForm = () => {
    setStep("details");
    setDetailsErrors({});
    setPaymentErrors({});
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    });
    setPaymentData({
      cardName: "",
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
      paymentMethod: "credit-card",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        {step === "confirmation" ? (
          <div className="flex flex-col items-center justify-center gap-4 py-8">
            <div className="rounded-full bg-green-100 p-3">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <DialogTitle>Order Confirmed!</DialogTitle>
            <p className="text-center text-muted-foreground">
              Your order has been processed successfully. You'll receive a
              confirmation email shortly.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>
                {step === "details" ? "Shipping Details" : "Payment Method"}
              </DialogTitle>
              <DialogDescription>
                {step === "details"
                  ? "Enter your shipping and contact information"
                  : "Choose your payment method"}
              </DialogDescription>
            </DialogHeader>

            {step === "details" && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">
                      First Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleDetailsChange}
                      placeholder="John"
                      className={
                        detailsErrors.firstName ? "border-destructive" : ""
                      }
                    />
                    {detailsErrors.firstName && (
                      <p className="text-xs text-destructive">
                        {detailsErrors.firstName}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">
                      Last Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleDetailsChange}
                      placeholder="Doe"
                      className={
                        detailsErrors.lastName ? "border-destructive" : ""
                      }
                    />
                    {detailsErrors.lastName && (
                      <p className="text-xs text-destructive">
                        {detailsErrors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleDetailsChange}
                    placeholder="john@example.com"
                    className={detailsErrors.email ? "border-destructive" : ""}
                  />
                  {detailsErrors.email && (
                    <p className="text-xs text-destructive">
                      {detailsErrors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Phone <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleDetailsChange}
                    placeholder="(555) 123-4567"
                    className={detailsErrors.phone ? "border-destructive" : ""}
                  />
                  {detailsErrors.phone && (
                    <p className="text-xs text-destructive">
                      {detailsErrors.phone}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">
                    Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleDetailsChange}
                    placeholder="123 Main St"
                    className={
                      detailsErrors.address ? "border-destructive" : ""
                    }
                  />
                  {detailsErrors.address && (
                    <p className="text-xs text-destructive">
                      {detailsErrors.address}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">
                      City <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleDetailsChange}
                      placeholder="New York"
                      className={detailsErrors.city ? "border-destructive" : ""}
                    />
                    {detailsErrors.city && (
                      <p className="text-xs text-destructive">
                        {detailsErrors.city}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">
                      State <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleDetailsChange}
                      placeholder="NY"
                      className={
                        detailsErrors.state ? "border-destructive" : ""
                      }
                    />
                    {detailsErrors.state && (
                      <p className="text-xs text-destructive">
                        {detailsErrors.state}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">
                      ZIP Code <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleDetailsChange}
                      placeholder="10001"
                      className={
                        detailsErrors.zipCode ? "border-destructive" : ""
                      }
                    />
                    {detailsErrors.zipCode && (
                      <p className="text-xs text-destructive">
                        {detailsErrors.zipCode}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">
                      Country <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleDetailsChange}
                      placeholder="United States"
                      className={
                        detailsErrors.country ? "border-destructive" : ""
                      }
                    />
                    {detailsErrors.country && (
                      <p className="text-xs text-destructive">
                        {detailsErrors.country}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => onOpenChange(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button onClick={handleNext} className="flex-1">
                    Continue to Payment
                  </Button>
                </div>
              </div>
            )}

            {step === "payment" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="paymentMethod">
                    Payment Method <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={paymentData.paymentMethod}
                    onValueChange={handlePaymentMethodChange}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="credit-card">Credit Card</SelectItem>
                      <SelectItem value="debit-card">Debit Card</SelectItem>
                      <SelectItem value="paypal">PayPal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {paymentData.paymentMethod.includes("card") && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="cardName">
                        Cardholder Name{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="cardName"
                        name="cardName"
                        type="text"
                        value={paymentData.cardName}
                        onChange={handlePaymentChange}
                        placeholder="John Doe"
                        className={
                          paymentErrors.cardName ? "border-destructive" : ""
                        }
                      />
                      {paymentErrors.cardName && (
                        <p className="text-xs text-destructive">
                          {paymentErrors.cardName}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">
                        Card Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        type="text"
                        value={paymentData.cardNumber}
                        onChange={(e) => {
                          const value = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 16);
                          setPaymentData({ ...paymentData, cardNumber: value });
                        }}
                        placeholder="1234 5678 9012 3456"
                        className={
                          paymentErrors.cardNumber ? "border-destructive" : ""
                        }
                      />
                      {paymentErrors.cardNumber && (
                        <p className="text-xs text-destructive">
                          {paymentErrors.cardNumber}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryMonth">
                          Month <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="expiryMonth"
                          name="expiryMonth"
                          type="text"
                          value={paymentData.expiryMonth}
                          onChange={(e) => {
                            const value = e.target.value
                              .replace(/\D/g, "")
                              .slice(0, 2);
                            setPaymentData({
                              ...paymentData,
                              expiryMonth: value,
                            });
                          }}
                          placeholder="MM"
                          className={
                            paymentErrors.expiryMonth
                              ? "border-destructive"
                              : ""
                          }
                        />
                        {paymentErrors.expiryMonth && (
                          <p className="text-xs text-destructive">
                            {paymentErrors.expiryMonth}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="expiryYear">
                          Year <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="expiryYear"
                          name="expiryYear"
                          type="text"
                          value={paymentData.expiryYear}
                          onChange={(e) => {
                            const value = e.target.value
                              .replace(/\D/g, "")
                              .slice(0, 2);
                            setPaymentData({
                              ...paymentData,
                              expiryYear: value,
                            });
                          }}
                          placeholder="YY"
                          className={
                            paymentErrors.expiryYear ? "border-destructive" : ""
                          }
                        />
                        {paymentErrors.expiryYear && (
                          <p className="text-xs text-destructive">
                            {paymentErrors.expiryYear}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">
                          CVV <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          type="text"
                          value={paymentData.cvv}
                          onChange={(e) => {
                            const value = e.target.value
                              .replace(/\D/g, "")
                              .slice(0, 3);
                            setPaymentData({ ...paymentData, cvv: value });
                          }}
                          placeholder="123"
                          className={
                            paymentErrors.cvv ? "border-destructive" : ""
                          }
                        />
                        {paymentErrors.cvv && (
                          <p className="text-xs text-destructive">
                            {paymentErrors.cvv}
                          </p>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {paymentData.paymentMethod === "paypal" && (
                  <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                    <p className="text-sm text-blue-700">
                      You will be redirected to PayPal to complete your payment.
                    </p>
                  </div>
                )}

                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Order Total</span>
                    </div>
                    <span className="font-display text-lg font-bold">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setStep("details")}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button onClick={handleProcessPayment} className="flex-1">
                    Process Payment
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutDialog;
