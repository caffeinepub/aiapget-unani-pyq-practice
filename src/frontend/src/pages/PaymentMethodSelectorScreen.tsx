import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import { useState } from "react";
import type { Screen } from "../App";

interface PaymentMethodSelectorScreenProps {
  planName: string;
  planPrice: string;
  planCycle: "monthly" | "yearly";
  onNavigate: (screen: Screen) => void;
}

const RAZORPAY_LINK = "https://razorpay.me/@aiapgetunani";

const PAYMENT_OPTIONS = [
  {
    id: "upi",
    label: "UPI (Google Pay, PhonePe, Paytm, BHIM)",
    description: "Pay instantly with any UPI app",
    icon: "🏦",
  },
  {
    id: "card",
    label: "Credit / Debit Card",
    description: "Visa, Mastercard, RuPay",
    icon: "💳",
  },
  {
    id: "netbanking",
    label: "Net Banking",
    description: "All major Indian banks supported",
    icon: "🏛️",
  },
  {
    id: "wallet",
    label: "Wallets",
    description: "Paytm, Mobikwik, Freecharge & more",
    icon: "👛",
  },
  {
    id: "emi",
    label: "EMI",
    description: "Easy monthly instalments via card or bank",
    icon: "📅",
  },
];

export default function PaymentMethodSelectorScreen({
  planName,
  planPrice,
  planCycle,
  onNavigate,
}: PaymentMethodSelectorScreenProps) {
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePay = () => {
    // Open Razorpay payment link in a new tab
    window.open(RAZORPAY_LINK, "_blank", "noopener,noreferrer");
    // Show success/confirmation state after redirect
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
        <div
          className="bg-card border border-border rounded-2xl p-8 max-w-sm w-full text-center shadow-lg space-y-4"
          data-ocid="payment.success_state"
        >
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9 text-green-500" />
            </div>
          </div>
          <h2 className="text-xl font-heading font-bold text-foreground">
            Payment Page Opened!
          </h2>
          <p className="text-sm text-muted-foreground font-body">
            Complete the payment on the Razorpay page. Once confirmed, your{" "}
            <strong className="text-foreground">{planName}</strong> plan will be
            activated.
          </p>
          <div className="bg-muted rounded-xl p-3 text-sm font-body text-muted-foreground">
            <p>
              Amount: <strong className="text-foreground">{planPrice}</strong>
            </p>
            <p>
              Billing:{" "}
              <strong className="text-foreground capitalize">
                {planCycle}
              </strong>
            </p>
          </div>
          <Button
            data-ocid="payment.primary_button"
            variant="outline"
            className="w-full font-body"
            onClick={() =>
              window.open(RAZORPAY_LINK, "_blank", "noopener,noreferrer")
            }
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Reopen Payment Page
          </Button>
          <Button
            data-ocid="payment.secondary_button"
            className="w-full font-body bg-gold hover:bg-gold/90 text-white border-0"
            onClick={() => onNavigate({ name: "home" })}
          >
            Go to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 max-w-lg mx-auto w-full px-4 py-6 space-y-5">
        {/* Back */}
        <button
          type="button"
          data-ocid="payment.link"
          onClick={() => onNavigate({ name: "subscription" })}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Plans
        </button>

        {/* Order Summary */}
        <div className="bg-card border border-gold/30 rounded-2xl p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground font-body uppercase tracking-wide">
              Selected Plan
            </p>
            <p className="font-heading font-bold text-foreground">{planName}</p>
            <p className="text-xs text-muted-foreground font-body capitalize">
              {planCycle} billing
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-heading font-bold text-gold">
              {planPrice}
            </p>
          </div>
        </div>

        {/* Payment Options */}
        <div
          className="bg-card border border-border rounded-2xl p-5 space-y-4"
          data-ocid="payment.section"
        >
          <div className="text-center space-y-1">
            <h3 className="text-base font-heading font-bold text-foreground">
              Choose Payment Method
            </h3>
            <p className="text-xs text-muted-foreground font-body">
              Powered by Razorpay — 100% secure &amp; encrypted
            </p>
          </div>

          {/* Payment method list */}
          <div className="space-y-2">
            {PAYMENT_OPTIONS.map((option) => (
              <button
                key={option.id}
                type="button"
                data-ocid={`payment.${option.id}.button`}
                onClick={handlePay}
                className="w-full flex items-center gap-3 bg-muted/50 border border-border rounded-xl px-4 py-3 hover:border-gold/60 hover:bg-muted/80 active:scale-[0.98] transition-all duration-150 cursor-pointer text-left"
              >
                <span className="text-2xl">{option.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground font-body leading-tight">
                    {option.label}
                  </p>
                  <p className="text-xs text-muted-foreground font-body">
                    {option.description}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              </button>
            ))}
          </div>

          <p className="text-xs text-center text-muted-foreground font-body">
            Tap any option to pay via Razorpay's secure page.
          </p>
        </div>

        {/* Pay Now Button */}
        <Button
          onClick={handlePay}
          data-ocid="payment.submit_button"
          className="w-full font-body text-base py-6 bg-gold hover:bg-gold/90 text-white border-0 rounded-xl flex items-center justify-center gap-2"
        >
          <ExternalLink className="w-5 h-5" />
          Pay {planPrice} via Razorpay
        </Button>

        <p className="text-center text-xs text-muted-foreground font-body">
          🔒 You will be redirected to Razorpay's secure payment page to
          complete the transaction.
        </p>
      </main>
    </div>
  );
}
