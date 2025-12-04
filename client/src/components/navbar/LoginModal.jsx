const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-100/50 backdrop-blur-sm animate-fadeIn"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-md p-6 relative animate-scaleIn">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-secondary-main hover:text-secondary-hover text-heading-m-regular"
                >
                    ✕
                </button>

                <h2 className="text-heading-m-bold text-center mb-6">
                    Masuk ke Akun Anda
                </h2>

                <form className="space-y-4">
                    <div>
                        <label className="block text-m-regular mb-1">Alamat Email</label>
                        <input
                            type="email"
                            className="w-full border border-neutral-50 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-focus"
                            placeholder="nama@company.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-m-regular mb-1">Kata Sandi</label>
                        <input
                            type="password"
                            className="w-full border border-neutral-50 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-focus"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="button"
                        onClick={() => alert("Login mockup frontend.")}
                        className="w-full bg-primary-main text-neutral-10 text-l-bold py-2 rounded-lg hover:bg-primary-hover"
                    >
                        SIGN IN
                    </button>

                    <p className="text-sm text-center text-neutral-90">
                        Belum punya akun?
                        <a className="text-primary-main font-bold hover:underline" href="#">
                            &nbsp;Daftar Sekarang
                        </a>
                    </p>
                </form>
            </div>

            {/* Animations */}
            <style>
                {`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes scaleIn { from { transform: scale(.9); opacity: 0 } to { transform: scale(1); opacity: 1 } }
        .animate-fadeIn { animation: fadeIn .25s ease-out }
        .animate-scaleIn { animation: scaleIn .25s ease-out }
      `}
            </style>
        </div>
    );
};

export default LoginModal;
