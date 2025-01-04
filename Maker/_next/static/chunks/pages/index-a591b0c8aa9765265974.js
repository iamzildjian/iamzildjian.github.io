_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
	[9], {
		"+QRC": function(e, n, a) {
			"use strict";
			var i = a("E9nw"),
				o = {
					"text/plain": "Text",
					"text/html": "Url",
					default: "Text"
				};
			e.exports = function(e, n) {
				var a, r, t, d, m, l, s = !1;
				n || (n = {}), a = n.debug || !1;
				try {
					if (t = i(), d = document.createRange(), m = document.getSelection(), (l = document.createElement("span")).textContent = e, l.style.all = "unset", l.style.position = "fixed", l.style.top = 0, l.style.clip = "rect(0, 0, 0, 0)", l.style.whiteSpace = "pre", l.style.webkitUserSelect = "text", l.style.MozUserSelect = "text", l.style.msUserSelect = "text", l.style.userSelect = "text", l.addEventListener("copy", (function(i) {
							if (i.stopPropagation(), n.format)
								if (i.preventDefault(), "undefined" === typeof i.clipboardData) {
									a && console.warn("unable to use e.clipboardData"), a && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
									var r = o[n.format] || o.default;
									window.clipboardData.setData(r, e)
								} else i.clipboardData.clearData(), i.clipboardData.setData(n.format, e);
							n.onCopy && (i.preventDefault(), n.onCopy(i.clipboardData))
						})), document.body.appendChild(l), d.selectNodeContents(l), m.addRange(d), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
					s = !0
				} catch (c) {
					a && console.error("unable to copy using execCommand: ", c), a && console.warn("trying IE specific stuff");
					try {
						window.clipboardData.setData(n.format || "text", e), n.onCopy && n.onCopy(window.clipboardData), s = !0
					} catch (c) {
						a && console.error("unable to copy using clipboardData: ", c), a && console.error("falling back to prompt"), r = function(e) {
							var n = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
							return e.replace(/#{\s*key\s*}/g, n)
						}("message" in n ? n.message : "Copy to clipboard: #{key}, Enter"), window.prompt(r, e)
					}
				} finally {
					m && ("function" == typeof m.removeRange ? m.removeRange(d) : m.removeAllRanges()), l && document.body.removeChild(l), t()
				}
				return s
			}
		},
		"/EDR": function(e, n, a) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
				return a("QeBL")
			}])
		},
		"2W6z": function(e, n, a) {
			"use strict";
			var i = function() {};
			e.exports = i
		},
		E9nw: function(e, n) {
			e.exports = function() {
				var e = document.getSelection();
				if (!e.rangeCount) return function() {};
				for (var n = document.activeElement, a = [], i = 0; i < e.rangeCount; i++) a.push(e.getRangeAt(i));
				switch (n.tagName.toUpperCase()) {
					case "INPUT":
					case "TEXTAREA":
						n.blur();
						break;
					default:
						n = null
				}
				return e.removeAllRanges(),
					function() {
						"Caret" === e.type && e.removeAllRanges(), e.rangeCount || a.forEach((function(n) {
							e.addRange(n)
						})), n && n.focus()
					}
			}
		},
		QeBL: function(e, n, a) {
			"use strict";

			function i(e, n) {
				(null == n || n > e.length) && (n = e.length);
				for (var a = 0, i = new Array(n); a < n; a++) i[a] = e[a];
				return i
			}

			function o(e) {
				return function(e) {
					if (Array.isArray(e)) return i(e)
				}(e) || function(e) {
					if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
				}(e) || function(e, n) {
					if (e) {
						if ("string" === typeof e) return i(e, n);
						var a = Object.prototype.toString.call(e).slice(8, -1);
						return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? i(e, n) : void 0
					}
				}(e) || function() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}
			a.r(n);
			var r = a("rePB"),
				t = a("q1tI"),
				d = a.n(t),
				m = a("mf32"),
				l = a("+QRC"),
				s = a.n(l);
			var c = function(e) {
					var n = Object(t.useState)(!1),
						a = n[0],
						i = n[1],
						o = Object(t.useCallback)((function() {
							var n = s()(e);
							i(n)
						}), [e]);
					return Object(t.useEffect)((function() {
						if (a) {
							var e = setTimeout((function() {
								i(!1)
							}), 1500);
							return function() {
								return clearTimeout(e)
							}
						}
					}), [a]), {
						value: e,
						onCopy: o,
						hasCopied: a
					}
				},
				u = a("eJLp"),
				f = a("pVnL"),
				h = a.n(f),
				p = a("8OQS"),
				S = a.n(p),
				g = a("qKvR"),
				b = a("BMxC"),
				v = a("lSNA"),
				y = a.n(v),
				C = a("5D9J"),
				O = a("OJSm"),
				B = a("QdyT");

			function k(e, n) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					n && (i = i.filter((function(n) {
						return Object.getOwnPropertyDescriptor(e, n).enumerable
					}))), a.push.apply(a, i)
				}
				return a
			}
			var w = Object(C.a)(b.a)((function(e) {
				var n, a = e.type,
					i = void 0 === a ? "checkbox" : a,
					o = e._hover,
					r = e._invalid,
					t = e._disabled,
					d = e._focus,
					m = e._checked,
					l = e._child,
					s = void 0 === l ? {
						opacity: 0
					} : l,
					c = e._checkedAndChild,
					u = void 0 === c ? {
						opacity: 1
					} : c,
					f = e._checkedAndDisabled,
					h = e._checkedAndFocus,
					p = e._checkedAndHover,
					S = "input[type=" + i + "]:checked:disabled + &, input[type=" + i + "][aria-checked=mixed]:disabled + &",
					g = "input[type=" + i + "]:checked:hover:not(:disabled) + &, input[type=" + i + "][aria-checked=mixed]:hover:not(:disabled) + &",
					b = "input[type=" + i + "]:checked:focus + &, input[type=" + i + "][aria-checked=mixed]:focus + &",
					v = "input[type=" + i + "]:disabled + &",
					C = "input[type=" + i + "]:focus + &",
					w = "input[type=" + i + "]:hover:not(:disabled):not(:checked) + &",
					P = "input[type=" + i + "]:checked + &, input[type=" + i + "][aria-checked=mixed] + &",
					D = "input[type=" + i + "][aria-invalid=true] + &";
				return Object(O.a)(((n = {})[C] = Object(B.b)(d), n[w] = Object(B.b)(o), n[v] = Object(B.b)(t), n[D] = Object(B.b)(r), n[S] = Object(B.b)(f), n[b] = Object(B.b)(h), n[g] = Object(B.b)(p), n["& > *"] = Object(B.b)(s), n[P] = function(e) {
					for (var n = 1; n < arguments.length; n++) {
						var a = null != arguments[n] ? arguments[n] : {};
						n % 2 ? k(a, !0).forEach((function(n) {
							y()(e, n, a[n])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : k(a).forEach((function(n) {
							Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n))
						}))
					}
					return e
				}({}, Object(B.b)(m), {
					"& > *": Object(B.b)(u)
				}), n))
			}));
			w.displayName = "ControlBox", w.defaultProps = {
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				transition: "all 120ms",
				flexShrink: "0",
				"aria-hidden": "true"
			};
			var P = w,
				D = a("w0db"),
				A = a("+Z5E"),
				x = a("8hg0");

			function I(e, n) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					n && (i = i.filter((function(n) {
						return Object.getOwnPropertyDescriptor(e, n).enumerable
					}))), a.push.apply(a, i)
				}
				return a
			}
			var j = {
					userSelect: "none",
					border: "2px",
					rounded: "md",
					borderColor: "inherit",
					transition: "background-color 120ms, box-shadow 250ms"
				},
				E = function(e) {
					var n = {
						lg: 5,
						md: 4,
						sm: "radio" === e.type ? 3 : "auto"
					};
					return function(e) {
						for (var n = 1; n < arguments.length; n++) {
							var a = null != arguments[n] ? arguments[n] : {};
							n % 2 ? I(a, !0).forEach((function(n) {
								y()(e, n, a[n])
							})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : I(a).forEach((function(n) {
								Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n))
							}))
						}
						return e
					}({}, j, {}, e.size && {
						rounded: "sm"
					}, {}, function(e) {
						var n = e.color,
							a = "dark" === e.colorMode,
							i = a ? 200 : 500;
						return {
							color: "white",
							_checked: {
								bg: Object(x.b)(n, i),
								borderColor: Object(x.b)(n, i),
								color: a ? "gray.900" : void 0
							},
							_checkedAndDisabled: {
								borderColor: a ? "transparent" : "gray.200",
								bg: a ? "whiteAlpha.300" : "gray.200",
								color: a ? "whiteAlpha.500" : "gray.500"
							},
							_disabled: {
								bg: a ? "whiteAlpha.100" : "gray.100",
								borderColor: a ? "transparent" : "gray.100"
							},
							_focus: {
								boxShadow: "outline"
							},
							_invalid: {
								borderColor: a ? "red.300" : "red.500"
							}
						}
					}(e), {
						size: n[e.size]
					})
				},
				G = a("D7Da"),
				R = Object(t.forwardRef)((function(e, n) {
					var a = e.id,
						i = e.name,
						o = e.value,
						r = e["aria-label"],
						d = e["aria-labelledby"],
						l = e.variantColor,
						s = void 0 === l ? "blue" : l,
						c = e.defaultIsChecked,
						u = e.isChecked,
						f = e.isFullWidth,
						p = e.size,
						v = void 0 === p ? "md" : p,
						y = e.isDisabled,
						C = e.isInvalid,
						O = e.isReadOnly,
						B = e.onChange,
						k = e.onBlur,
						w = e.onFocus,
						x = e.isIndeterminate,
						I = e.children,
						j = e.iconColor,
						R = e.iconSize,
						L = void 0 === R ? "10px" : R,
						H = S()(e, ["id", "name", "value", "aria-label", "aria-labelledby", "variantColor", "defaultIsChecked", "isChecked", "isFullWidth", "size", "isDisabled", "isInvalid", "isReadOnly", "onChange", "onBlur", "onFocus", "isIndeterminate", "children", "iconColor", "iconSize"]);
					Object(G.c)("Checkbox", s);
					var W = Object(m.b)().colorMode,
						F = E({
							color: s,
							size: v,
							colorMode: W
						}),
						T = Object(t.useRef)(),
						_ = Object(G.b)(T, n);
					return Object(t.useEffect)((function() {
						_.current && (_.current.indeterminate = Boolean(x))
					}), [x, _]), Object(g.d)(b.a, h()({
						as: "label",
						display: "inline-flex",
						verticalAlign: "top",
						alignItems: "center",
						width: f ? "full" : void 0,
						cursor: y ? "not-allowed" : "pointer"
					}, H), Object(g.d)(A.a, {
						as: "input",
						type: "checkbox",
						"aria-label": r,
						"aria-labelledby": d,
						id: a,
						ref: _,
						name: i,
						value: o,
						onChange: O ? void 0 : B,
						onBlur: k,
						onFocus: w,
						defaultChecked: O ? void 0 : c,
						checked: O ? Boolean(u) : c ? void 0 : u,
						disabled: y,
						readOnly: O,
						"aria-readonly": O,
						"aria-invalid": C,
						"aria-checked": x ? "mixed" : u
					}), Object(g.d)(P, h()({
						opacity: O ? .8 : 1
					}, F), Object(g.d)(D.a, {
						name: x ? "minus" : "check",
						size: L,
						color: j,
						transition: "transform 240ms, opacity 240ms"
					})), I && Object(g.d)(b.a, {
						ml: 2,
						fontSize: v,
						userSelect: "none",
						opacity: y ? .4 : 1
					}, I))
				}));
			R.displayName = "Checkbox";
			var L = R,
				H = (a("2W6z"), W() ? d.a.useLayoutEffect : d.a.useEffect);
			"undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math && self;

			function W() {
				return !("undefined" === typeof window || !window.document || !window.document.createElement)
			}
			var F = !1,
				T = 0,
				_ = function() {
					return ++T
				},
				M = function(e) {
					var n = e.onChange,
						a = e.name,
						i = e.variantColor,
						o = e.size,
						r = e.defaultValue,
						d = e.isInline,
						m = e.value,
						l = e.spacing,
						s = void 0 === l ? 2 : l,
						c = e.children,
						u = S()(e, ["onChange", "name", "variantColor", "size", "defaultValue", "isInline", "value", "spacing", "children"]),
						f = Object(t.useState)(r || []),
						p = f[0],
						v = f[1],
						y = Object(t.useRef)(null != m).current,
						C = y ? m : p,
						O = function(e) {
							var a, i = e.target,
								o = i.checked,
								r = i.value;
							a = o ? [].concat(C, [r]) : C.filter((function(e) {
								return e !== r
							})), !y && v(a), n && n(a)
						},
						B = "checkbox-" + function(e) {
							var n = e || (F ? _() : null),
								a = Object(t.useState)(n),
								i = a[0],
								o = a[1];
							return H((function() {
								null === i && o(_())
							}), []), Object(t.useEffect)((function() {
								!1 === F && (F = !0)
							}), []), null != i ? String(i) : void 0
						}(),
						k = a || B,
						w = Object(G.a)(c),
						P = w.map((function(e, n) {
							var a = w.length === n + 1,
								r = d ? {
									mr: s
								} : {
									mb: s
								};
							return Object(g.d)(b.a, h()({
								key: n,
								display: d ? "inline-block" : "block"
							}, !a && r), Object(t.cloneElement)(e, {
								size: o,
								variantColor: i,
								name: k + "-" + n,
								onChange: O,
								isChecked: C.includes(e.props.value)
							}))
						}));
					return Object(g.d)(b.a, h()({
						role: "group"
					}, u), P)
				},
				N = a("sK1y"),
				z = a("Weur"),
				V = function(e) {
					var n = K();
					return n ? Object.keys(n).reduce((function(a, i) {
						return a[i] = e[i], n && null == e[i] && (a[i] = n[i]), a
					}), {}) : e
				},
				J = Object(t.createContext)(),
				K = function() {
					return Object(t.useContext)(J)
				},
				q = Object(t.forwardRef)((function(e, n) {
					var a = e.isInvalid,
						i = e.isRequired,
						o = e.isDisabled,
						r = e.isReadOnly,
						t = S()(e, ["isInvalid", "isRequired", "isDisabled", "isReadOnly"]),
						d = {
							isRequired: i,
							isDisabled: o,
							isInvalid: a,
							isReadOnly: r
						};
					return Object(g.d)(J.Provider, {
						value: d
					}, Object(g.d)(b.a, h()({
						role: "group",
						ref: n
					}, t)))
				}));
			q.displayName = "FormControl";
			var X = a("+Cyc"),
				Q = a("CjxU"),
				U = a("za5s");

			function Z(e, n) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					n && (i = i.filter((function(n) {
						return Object.getOwnPropertyDescriptor(e, n).enumerable
					}))), a.push.apply(a, i)
				}
				return a
			}

			function Y(e) {
				for (var n = 1; n < arguments.length; n++) {
					var a = null != arguments[n] ? arguments[n] : {};
					n % 2 ? Z(a, !0).forEach((function(n) {
						y()(e, n, a[n])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Z(a).forEach((function(n) {
						Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n))
					}))
				}
				return e
			}
			var $ = {
					_readOnly: {
						bg: "transparent",
						boxShadow: "none !important",
						userSelect: "all"
					}
				},
				ee = {
					bg: "transparent",
					px: void 0,
					height: void 0
				},
				ne = function(e) {
					switch (e.variant) {
						case "flushed":
							return function(e) {
								var n = e.theme,
									a = e.focusBorderColor,
									i = e.errorBorderColor,
									o = Object(U.h)(n.colors, a, a),
									r = Object(U.h)(n.colors, i, i);
								return Y({}, $, {
									borderBottom: "2px",
									borderColor: "inherit",
									rounded: 0,
									px: void 0,
									bg: "transparent",
									_focus: {
										zIndex: 1,
										borderColor: o
									},
									_invalid: {
										borderColor: r
									}
								})
							}(e);
						case "unstyled":
							return ee;
						case "filled":
							return function(e) {
								var n = e.theme,
									a = e.focusBorderColor,
									i = e.errorBorderColor,
									o = e.colorMode,
									r = Object(U.h)(n.colors, a, a),
									t = Object(U.h)(n.colors, i, i);
								return Y({}, $, {
									border: "2px",
									borderColor: "transparent",
									bg: {
										light: "gray.100",
										dark: "whiteAlpha.50"
									} [o],
									_hover: {
										bg: {
											light: "gray.200",
											dark: "whiteAlpha.100"
										} [o]
									},
									_disabled: {
										opacity: "0.4",
										cursor: "not-allowed"
									},
									_focus: {
										zIndex: 1,
										bg: "transparent",
										borderColor: r
									},
									_invalid: {
										borderColor: t
									}
								})
							}(e);
						case "outline":
							return function(e) {
								var n = e.theme,
									a = e.colorMode,
									i = e.focusBorderColor,
									o = e.errorBorderColor,
									r = Object(U.h)(n.colors, i, i),
									t = Object(U.h)(n.colors, o, o);
								return Y({}, $, {
									border: "1px",
									borderColor: {
										light: "inherit",
										dark: "whiteAlpha.50"
									} [a],
									bg: {
										light: "white",
										dark: "whiteAlpha.100"
									} [a],
									_hover: {
										borderColor: {
											light: "gray.300",
											dark: "whiteAlpha.200"
										} [a]
									},
									_disabled: {
										opacity: "0.4",
										cursor: "not-allowed"
									},
									_focus: {
										zIndex: 1,
										borderColor: r,
										boxShadow: "0 0 0 1px " + r
									},
									_invalid: {
										borderColor: t,
										boxShadow: "0 0 0 1px " + t
									}
								})
							}(e);
						default:
							return {}
					}
				},
				ae = {
					display: "flex",
					alignItems: "center",
					position: "relative",
					transition: "all 0.2s",
					outline: "none",
					appearance: "none"
				},
				ie = {
					lg: {
						fontSize: "lg",
						px: 4,
						height: 12,
						rounded: "md"
					},
					md: {
						fontSize: "md",
						px: 4,
						height: 10,
						rounded: "md"
					},
					sm: {
						fontSize: "sm",
						px: 3,
						height: 8,
						rounded: "sm"
					}
				},
				oe = function(e) {
					var n = Y({}, e, {
						theme: Object(Q.b)(),
						colorMode: Object(m.b)().colorMode
					});
					return Y({
						width: e.isFullWidth ? "100%" : void 0
					}, ae, {}, function(e) {
						return ie[e.size]
					}(n), {}, ne(n))
				},
				re = Object(t.forwardRef)((function(e, n) {
					e.size, e.variant;
					var a = e.as,
						i = e["aria-label"],
						o = e["aria-describedby"],
						r = e.isReadOnly,
						t = (e.isFullWidth, e.isDisabled, e.isInvalid, e.isRequired, e.focusBorderColor, e.errorBorderColor, S()(e, ["size", "variant", "as", "aria-label", "aria-describedby", "isReadOnly", "isFullWidth", "isDisabled", "isInvalid", "isRequired", "focusBorderColor", "errorBorderColor"])),
						d = oe(e),
						m = V(e);
					return Object(g.d)(X.a, h()({
						ref: n,
						as: a,
						readOnly: m.isReadOnly,
						"aria-readonly": r,
						disabled: m.isDisabled,
						"aria-label": i,
						"aria-invalid": m.isInvalid,
						required: m.isRequired,
						"aria-required": m.isRequired,
						"aria-disabled": m.isDisabled,
						"aria-describedby": o
					}, d, t))
				}));
			re.displayName = "Input", re.defaultProps = {
				size: "md",
				as: "input",
				variant: "outline",
				isFullWidth: !0,
				focusBorderColor: "blue.500",
				errorBorderColor: "red.500"
			};
			var te = re,
				de = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight", "marginY", "marginX", "flex", "flexBasis", "width", "minWidth", "maxWidth", "maxW", "minW", "w", "zIndex", "top", "right", "bottom", "left", "position", "pos"],
				me = function(e) {
					var n = {},
						a = {};
					for (var i in e) de.includes(i) ? n[i] = e[i] : a[i] = e[i];
					return [n, a]
				},
				le = function(e) {
					var n = e.icon,
						a = S()(e, ["icon"]);
					return "string" === typeof n ? Object(g.d)(D.a, h()({
						focusable: "false",
						name: n,
						color: "currentColor"
					}, a)) : Object(g.d)(b.a, h()({
						as: n,
						"data-custom-icon": !0,
						focusable: "false",
						color: "currentColor"
					}, a))
				},
				se = Object(t.forwardRef)((function(e, n) {
					return Object(g.d)(b.a, h()({
						ref: n,
						position: "absolute",
						display: "inline-flex",
						width: "1.5rem",
						height: "100%",
						alignItems: "center",
						justifyContent: "center",
						right: "0.5rem",
						top: "50%",
						pointerEvents: "none",
						zIndex: 2,
						transform: "translateY(-50%)"
					}, e))
				})),
				ce = Object(t.forwardRef)((function(e, n) {
					var a = e.placeholder,
						i = e.children,
						o = S()(e, ["placeholder", "children"]);
					return Object(g.d)(te, h()({
						as: "select",
						appearance: "none",
						ref: n,
						pr: "2rem",
						pb: "px",
						lineHeight: "normal"
					}, o), a && Object(g.d)("option", {
						value: ""
					}, a), i)
				})),
				ue = Object(t.forwardRef)((function(e, n) {
					var a = e.rootProps,
						i = e.icon,
						o = e.iconSize,
						r = void 0 === o ? 5 : o,
						t = e.iconColor,
						d = S()(e, ["rootProps", "icon", "iconSize", "iconColor"]),
						l = "dark" === Object(m.b)().colorMode ? "whiteAlpha.800" : "inherit",
						s = d.isReadOnly || d.isDisabled ? .5 : null,
						c = me(d),
						u = c[0],
						f = c[1];
					return Object(g.d)(b.a, h()({
						position: "relative",
						width: "100%"
					}, u, a), Object(g.d)(ce, h()({
						ref: n,
						color: l
					}, f)), Object(g.d)(se, {
						opacity: s,
						color: t || f.color || l
					}, Object(g.d)(le, {
						focusable: "false",
						"aria-hidden": "true",
						icon: i || "chevron-down",
						size: r
					})))
				}));
			ue.displayName = "Select";
			var fe = ue,
				he = {
					sm: {
						width: "1.375rem",
						height: "0.75rem"
					},
					md: {
						width: "1.875rem",
						height: "1rem"
					},
					lg: {
						width: "2.875rem",
						height: "1.5rem"
					}
				},
				pe = Object(t.forwardRef)((function(e, n) {
					var a = e.id,
						i = e.name,
						o = e.value,
						r = e["aria-label"],
						t = e["aria-labelledby"],
						d = e.color,
						l = e.defaultIsChecked,
						s = e.isChecked,
						c = e.size,
						u = e.isDisabled,
						f = e.isInvalid,
						p = e.onChange,
						v = e.onBlur,
						y = e.onFocus,
						C = (e.children, S()(e, ["id", "name", "value", "aria-label", "aria-labelledby", "color", "defaultIsChecked", "isChecked", "size", "isDisabled", "isInvalid", "onChange", "onBlur", "onFocus", "children"])),
						O = Object(m.b)().colorMode,
						B = he[c] && he[c].width,
						k = he[c] && he[c].height,
						w = {
							rounded: "full",
							justifyContent: "flex-start",
							width: B,
							height: k,
							bg: "dark" === O ? "whiteAlpha.400" : "gray.300",
							boxSizing: "content-box",
							p: "2px",
							_checked: {
								bg: d + ".500"
							},
							_child: {
								transform: "translateX(0)"
							},
							_checkedAndChild: {
								transform: "translateX(calc(" + B + " - " + k + "))"
							},
							_focus: {
								boxShadow: "outline"
							},
							_hover: {
								cursor: "pointer"
							},
							_checkedAndHover: {
								cursor: "pointer"
							},
							_disabled: {
								opacity: .4,
								cursor: "not-allowed"
							}
						};
					return Object(g.d)(b.a, h()({
						as: "label",
						display: "inline-block",
						verticalAlign: "middle"
					}, C), Object(g.d)(A.a, {
						as: "input",
						type: "checkbox",
						"aria-label": r,
						"aria-labelledby": t,
						id: a,
						ref: n,
						name: i,
						value: o,
						"aria-invalid": f,
						defaultChecked: l,
						onChange: p,
						onBlur: v,
						onFocus: y,
						checked: s,
						disabled: u
					}), Object(g.d)(P, w, Object(g.d)(b.a, {
						bg: "white",
						transition: "transform 250ms",
						rounded: "full",
						size: k
					})))
				}));
			pe.displayName = "Switch", pe.defaultProps = {
				color: "blue",
				size: "md"
			};
			var Se = pe,
				ge = function(e) {
					var n = Object(m.b)().colorMode;
					return Object(g.d)(b.a, h()({
						as: "span",
						ml: 1,
						color: {
							light: "red.500",
							dark: "red.300"
						} [n],
						"aria-hidden": "true",
						children: "*"
					}, e))
				},
				be = Object(t.forwardRef)((function(e, n) {
					var a = e.children,
						i = S()(e, ["children"]),
						o = V(i);
					return Object(g.d)(b.a, h()({
						ref: n,
						fontSize: "md",
						pr: "12px",
						pb: "4px",
						opacity: o.isDisabled ? "0.4" : "1",
						fontWeight: "medium",
						textAlign: "left",
						verticalAlign: "middle",
						display: "inline-block",
						as: "label"
					}, i), a, o.isRequired && Object(g.d)(ge, null))
				}));
			be.displayName = "FormLabel";
			var ve = be,
				ye = [{
					groupId: 0,
					sectionId: 0,
					sectionName: "Swords",
					items: [{
						id: 0,
						name: "Kriss"
					}, {
						id: 1,
						name: "Short Sword"
					}, {
						id: 2,
						name: "Rapier"
					}, {
						id: 3,
						name: "Katana"
					}, {
						id: 4,
						name: "Sword of Assassin"
					}, {
						id: 5,
						name: "Blade"
					}, {
						id: 6,
						name: "Gladius"
					}, {
						id: 7,
						name: "Falchion"
					}, {
						id: 8,
						name: "Serpent Sword"
					}, {
						id: 9,
						name: "Sword of Salamander"
					}, {
						id: 10,
						name: "Light Saber"
					}, {
						id: 11,
						name: "Legendary Sword"
					}, {
						id: 12,
						name: "Heliacal Sword"
					}, {
						id: 13,
						name: "Double Blade"
					}, {
						id: 14,
						name: "Lighting Sword"
					}, {
						id: 15,
						name: "Giant Sword"
					}, {
						id: 16,
						name: "Sword of Destruction"
					}, {
						id: 17,
						name: "Dark Breaker"
					}, {
						id: 18,
						name: "Thunder Blade"
					}, {
						id: 19,
						name: "Divine Sword of Archangel"
					}, {
						id: 20,
						name: "Knight's Blade"
					}, {
						id: 21,
						name: "Dark Reign Blade"
					}, {
						id: 22,
						name: "Bone Blade"
					}, {
						id: 23,
						name: "Explosion Blade"
					}, {
						id: 24,
						name: "Daybreak"
					}, {
						id: 25,
						name: "Sword Dancer"
					}, {
						id: 26,
						name: "Flameberge"
					}, {
						id: 27,
						name: "Sword Breaker"
					}, {
						id: 28,
						name: "Rune Bastard Sword"
					}, {
						id: 31,
						name: "Rune Blade"
					}, {
						id: 32,
						name: "Sacred Glove"
					}, {
						id: 33,
						name: "Holy Storm Claw"
					}, {
						id: 34,
						name: "Piercing Glove"
					}, {
						id: 35,
						name: "Phoenix Soul Star"
					}]
				}, {
					groupId: 1,
					sectionId: 1,
					sectionName: "Axes",
					items: [{
						id: 0,
						name: "Small Axe"
					}, {
						id: 1,
						name: "Hand Axe"
					}, {
						id: 2,
						name: "Double Axe"
					}, {
						id: 3,
						name: "Tomahawk"
					}, {
						id: 4,
						name: "Elven Axe"
					}, {
						id: 5,
						name: "Battle Axe"
					}, {
						id: 6,
						name: "Nikea Axe"
					}, {
						id: 7,
						name: "Larkan Axe"
					}, {
						id: 8,
						name: "Crescent Axe"
					}]
				}, {
					groupId: 2,
					sectionId: 2,
					sectionName: "Maces",
					items: [{
						id: 0,
						name: "Mace"
					}, {
						id: 1,
						name: "Morning Star"
					}, {
						id: 2,
						name: "Flail"
					}, {
						id: 3,
						name: "Great Hammer"
					}, {
						id: 4,
						name: "Crystal Morning Star"
					}, {
						id: 5,
						name: "Crystal Sword"
					}, {
						id: 6,
						name: "Chaos Dragon Axe"
					}, {
						id: 7,
						name: "Elemental Mace"
					}, {
						id: 8,
						name: "Battle Scepter"
					}, {
						id: 9,
						name: "Master Scepter"
					}, {
						id: 10,
						name: "Great Scepter"
					}, {
						id: 11,
						name: "Lord's Scepter"
					}, {
						id: 12,
						name: "Great Lord's Scepter"
					}, {
						id: 13,
						name: "Divine Scepter of Archangel"
					}, {
						id: 14,
						name: "Soleil Scepter"
					}, {
						id: 15,
						name: "Shining Scepter"
					}, {
						id: 16,
						name: "Frost Mace"
					}, {
						id: 17,
						name: "Absolute Scepter"
					}, {
						id: 18,
						name: "Striker Scepter"
					}]
				}, {
					groupId: 3,
					sectionId: 3,
					sectionName: "Spears",
					items: [{
						id: 0,
						name: "Light Spear"
					}, {
						id: 1,
						name: "Spear"
					}, {
						id: 2,
						name: "Dragon Lance"
					}, {
						id: 3,
						name: "Giant Trident"
					}, {
						id: 4,
						name: "Serpent Spear"
					}, {
						id: 5,
						name: "Double Poleaxe"
					}, {
						id: 6,
						name: "Halberd"
					}, {
						id: 7,
						name: "Berdysh"
					}, {
						id: 8,
						name: "Great Scythe"
					}, {
						id: 9,
						name: "Bill of Balrog"
					}, {
						id: 10,
						name: "Dragon Spear"
					}, {
						id: 11,
						name: "Beuroba Spear"
					}]
				}, {
					groupId: 4,
					sectionId: 4,
					sectionName: "Bows",
					items: [{
						id: 0,
						name: "Short Bow"
					}, {
						id: 1,
						name: "Bow"
					}, {
						id: 2,
						name: "Elven Bow"
					}, {
						id: 3,
						name: "Battle Bow"
					}, {
						id: 4,
						name: "Tiger Bow"
					}, {
						id: 5,
						name: "Silver Bow"
					}, {
						id: 6,
						name: "Chaos Nature Bow"
					}, {
						id: 7,
						name: "Bolt"
					}, {
						id: 8,
						name: "Crossbow"
					}, {
						id: 9,
						name: "Golden Crossbow"
					}, {
						id: 10,
						name: "Arquebus"
					}, {
						id: 11,
						name: "Light Crossbow"
					}, {
						id: 12,
						name: "Serpent Crossbow"
					}, {
						id: 13,
						name: "Bluewing Crossbow"
					}, {
						id: 14,
						name: "Aquagold Crossbow"
					}, {
						id: 15,
						name: "Arrow"
					}, {
						id: 16,
						name: "Saint's Crossbow"
					}, {
						id: 17,
						name: "Celestial Bow"
					}, {
						id: 18,
						name: "Divine Crossbow of Archangel"
					}, {
						id: 19,
						name: "Great Reign Crossbow"
					}, {
						id: 20,
						name: "Arrow Viper Bow"
					}, {
						id: 21,
						name: "Sylph Wind Bow"
					}, {
						id: 22,
						name: "Albatross Bow"
					}, {
						id: 23,
						name: "Dark Stinger"
					}, {
						id: 24,
						name: "Air Lyn Bow"
					}]
				}, {
					groupId: 5,
					sectionId: 5,
					sectionName: "Staffs",
					items: [{
						id: 0,
						name: "Skull Staff"
					}, {
						id: 1,
						name: "Angelic Staff"
					}, {
						id: 2,
						name: "Serpent Staff"
					}, {
						id: 3,
						name: "Thunder Staff"
					}, {
						id: 4,
						name: "Gorgon Staff"
					}, {
						id: 5,
						name: "Legendary Staff"
					}, {
						id: 6,
						name: "Resurrection Staff"
					}, {
						id: 7,
						name: "Chaos Lighting Staff"
					}, {
						id: 8,
						name: "Destruction Staff"
					}, {
						id: 9,
						name: "Dragon Soul Staff"
					}, {
						id: 10,
						name: "Divine Staff of Archangel"
					}, {
						id: 11,
						name: "Kundun Staff"
					}, {
						id: 12,
						name: "Grand Viper Staff"
					}, {
						id: 13,
						name: "Platina Staff"
					}, {
						id: 14,
						name: "Mystery Stick"
					}, {
						id: 15,
						name: "Violent Wind Stick"
					}, {
						id: 16,
						name: "Red Winged Stick"
					}, {
						id: 17,
						name: "Ancient Stick"
					}, {
						id: 18,
						name: "Demonic Stick"
					}, {
						id: 19,
						name: "Storm Blitz Stick"
					}, {
						id: 20,
						name: "Eternal Wing Stick"
					}, {
						id: 21,
						name: "Book of Samut"
					}, {
						id: 22,
						name: "Book of Neil"
					}, {
						id: 23,
						name: "Book of Lagle"
					}, {
						id: 30,
						name: "Deadly Staff"
					}, {
						id: 31,
						name: "Inberial Staff"
					}, {
						id: 32,
						name: "Merlin Stick"
					}, {
						id: 33,
						name: "Chromatic Staff"
					}, {
						id: 34,
						name: "Raven Stick"
					}, {
						id: 36,
						name: "Divine Stick of Archangel"
					}]
				}, {
					groupId: 6,
					sectionId: 6,
					sectionName: "Shields",
					items: [{
						id: 0,
						name: "Small Shield"
					}, {
						id: 1,
						name: "Horn Shield"
					}, {
						id: 2,
						name: "Kite Shield"
					}, {
						id: 3,
						name: "Elven Shield"
					}, {
						id: 4,
						name: "Buckler Shield"
					}, {
						id: 5,
						name: "Dragon Slayer Shield"
					}, {
						id: 6,
						name: "Skull Shield"
					}, {
						id: 7,
						name: "Spiked Shield"
					}, {
						id: 8,
						name: "Tower Shield"
					}, {
						id: 9,
						name: "Plate Shield"
					}, {
						id: 10,
						name: "Large Round Shield"
					}, {
						id: 11,
						name: "Serpent Shield"
					}, {
						id: 12,
						name: "Bronze Shield"
					}, {
						id: 13,
						name: "Dragon Shield"
					}, {
						id: 14,
						name: "Legendary Shield"
					}, {
						id: 15,
						name: "Grand Soul Shield"
					}, {
						id: 16,
						name: "Elemental Shield"
					}, {
						id: 17,
						name: "Crimson Glory"
					}, {
						id: 18,
						name: "Salamander Shield"
					}, {
						id: 19,
						name: "Frost Barrier"
					}, {
						id: 20,
						name: "Guardian Shield"
					}, {
						id: 21,
						name: "Cross Shield"
					}]
				}, {
					groupId: 7,
					sectionId: 7,
					sectionName: "Helms",
					items: [{
						id: 0,
						name: "Bronze Helm"
					}, {
						id: 1,
						name: "Dragon Helm"
					}, {
						id: 2,
						name: "Pad Helm"
					}, {
						id: 3,
						name: "Legendary Helm"
					}, {
						id: 4,
						name: "Bone Helm"
					}, {
						id: 5,
						name: "Leather Helm"
					}, {
						id: 6,
						name: "Scale Helm"
					}, {
						id: 7,
						name: "Sphinx Mask"
					}, {
						id: 8,
						name: "Brass Helm"
					}, {
						id: 9,
						name: "Plate Helm"
					}, {
						id: 10,
						name: "Vine Helm"
					}, {
						id: 11,
						name: "Silk Helm"
					}, {
						id: 12,
						name: "Wind Helm"
					}, {
						id: 13,
						name: "Spirit Helm"
					}, {
						id: 14,
						name: "Guardian Helm"
					}, {
						id: 16,
						name: "Black Dragon Helm"
					}, {
						id: 17,
						name: "Dark Phoenix Helm"
					}, {
						id: 18,
						name: "Grand Soul Helm"
					}, {
						id: 19,
						name: "Divine Helm"
					}, {
						id: 21,
						name: "Great Dragon Helm"
					}, {
						id: 22,
						name: "Dark Soul Helm"
					}, {
						id: 24,
						name: "Red Spirit Helm"
					}, {
						id: 25,
						name: "Light Plate Mask"
					}, {
						id: 26,
						name: "Adamantine Mask"
					}, {
						id: 27,
						name: "Dark Steel Mask"
					}, {
						id: 28,
						name: "Dark Master Mask"
					}, {
						id: 29,
						name: "Dragon Knight Helm"
					}, {
						id: 30,
						name: "Venom Mist Helm"
					}, {
						id: 31,
						name: "Sylphid Ray Helm"
					}, {
						id: 33,
						name: "Sunlight Mask"
					}, {
						id: 34,
						name: "Ashcrow Helm"
					}, {
						id: 35,
						name: "Eclipse Helm"
					}, {
						id: 36,
						name: "Iris Helm"
					}, {
						id: 38,
						name: "Glorious Mask"
					}, {
						id: 39,
						name: "Violent Wind Helm"
					}, {
						id: 40,
						name: "Red Winged Helm"
					}, {
						id: 41,
						name: "Ancient Helm"
					}, {
						id: 42,
						name: "Demonic Helm"
					}, {
						id: 43,
						name: "Storm Blitz Helm"
					}, {
						id: 44,
						name: "Lilium Helm"
					}, {
						id: 45,
						name: "Titan Helm"
					}, {
						id: 46,
						name: "Brave Helm"
					}, {
						id: 49,
						name: "Seraphim Helm"
					}, {
						id: 50,
						name: "Faith Helm"
					}, {
						id: 51,
						name: "Royal Mask"
					}, {
						id: 52,
						name: "Hades Helm"
					}, {
						id: 53,
						name: "Queen Helm"
					}, {
						id: 59,
						name: "Sacred Fire Helm"
					}, {
						id: 60,
						name: "Storm Zahard Helm"
					}, {
						id: 61,
						name: "Piercing Grove Helm"
					}, {
						id: 73,
						name: "Phoenix Soul Helm"
					}]
				}, {
					groupId: 8,
					sectionId: 8,
					sectionName: "Armors",
					items: [{
						id: 0,
						name: "Bronze Armor"
					}, {
						id: 1,
						name: "Dragon Armor"
					}, {
						id: 2,
						name: "Pad Armor"
					}, {
						id: 3,
						name: "Legendary Armor"
					}, {
						id: 4,
						name: "Bone Armor"
					}, {
						id: 5,
						name: "Leather Armor"
					}, {
						id: 6,
						name: "Scale Armor"
					}, {
						id: 7,
						name: "Sphinx Armor"
					}, {
						id: 8,
						name: "Brass Armor"
					}, {
						id: 9,
						name: "Plate Armor"
					}, {
						id: 10,
						name: "Vine Armor"
					}, {
						id: 11,
						name: "Silk Armor"
					}, {
						id: 12,
						name: "Wind Armor"
					}, {
						id: 13,
						name: "Spirit Armor"
					}, {
						id: 14,
						name: "Guardian Armor"
					}, {
						id: 15,
						name: "Storm Crow Armor"
					}, {
						id: 16,
						name: "Black Dragon Armor"
					}, {
						id: 17,
						name: "Dark Phoenix Armor"
					}, {
						id: 18,
						name: "Grand Soul Armor"
					}, {
						id: 19,
						name: "Divine Armor"
					}, {
						id: 20,
						name: "Thunder Hawk Armor"
					}, {
						id: 21,
						name: "Great Dragon Armor"
					}, {
						id: 22,
						name: "Dark Soul Armor"
					}, {
						id: 23,
						name: "Hurricane Armor"
					}, {
						id: 24,
						name: "Red Sprit Armor"
					}, {
						id: 25,
						name: "Light Plate Armor"
					}, {
						id: 26,
						name: "Adamantine Armor"
					}, {
						id: 27,
						name: "Dark Steel Armor"
					}, {
						id: 28,
						name: "Dark Master Armor"
					}, {
						id: 29,
						name: "Dragon Knight Armor"
					}, {
						id: 30,
						name: "Venom Mist Armor"
					}, {
						id: 31,
						name: "Sylphid Ray Armor"
					}, {
						id: 32,
						name: "Volcano Armor"
					}, {
						id: 33,
						name: "Sunlight Armor"
					}, {
						id: 34,
						name: "Ashcrow Armor"
					}, {
						id: 35,
						name: "Eclipse Armor"
					}, {
						id: 36,
						name: "Iris Armor"
					}, {
						id: 37,
						name: "Valiant Armor"
					}, {
						id: 38,
						name: "Glorious Armor"
					}, {
						id: 39,
						name: "Violent Wind Armor"
					}, {
						id: 40,
						name: "Red Winged Armor"
					}, {
						id: 41,
						name: "Ancient Armor"
					}, {
						id: 42,
						name: "Demonic Armor"
					}, {
						id: 43,
						name: "Storm Blitz Armor"
					}, {
						id: 44,
						name: "Lilium Armor"
					}, {
						id: 53,
						name: "Queen Armor"
					}, {
						id: 45,
						name: "Titan Armor"
					}, {
						id: 46,
						name: "Brave Armor"
					}, {
						id: 47,
						name: "Phantom Armor"
					}, {
						id: 48,
						name: "Destruction Armor"
					}, {
						id: 49,
						name: "Seraphim Armor"
					}, {
						id: 50,
						name: "Faith Armor"
					}, {
						id: 51,
						name: "Royal Armor"
					}, {
						id: 52,
						name: "Hades Armor"
					}, {
						id: 59,
						name: "Sacred Fire Armor"
					}, {
						id: 60,
						name: "Storm Zahard Armor"
					}, {
						id: 61,
						name: "Piercing Grove Armor"
					}, {
						id: 73,
						name: "Phoenix Soul Armor"
					}]
				}, {
					groupId: 9,
					sectionId: 9,
					sectionName: "Pants",
					items: [{
						id: 0,
						name: "Bronze Pants"
					}, {
						id: 1,
						name: "Dragon Pants"
					}, {
						id: 2,
						name: "Pad Pants"
					}, {
						id: 3,
						name: "Legendary Pants"
					}, {
						id: 4,
						name: "Bone Pants"
					}, {
						id: 5,
						name: "Leather Pants"
					}, {
						id: 6,
						name: "Scale Pants"
					}, {
						id: 7,
						name: "Sphinx Pants"
					}, {
						id: 8,
						name: "Brass Pants"
					}, {
						id: 9,
						name: "Plate Pants"
					}, {
						id: 10,
						name: "Vine Pants"
					}, {
						id: 11,
						name: "Silk Pants"
					}, {
						id: 12,
						name: "Wind Pants"
					}, {
						id: 13,
						name: "Spirit Pants"
					}, {
						id: 14,
						name: "Guardian Pants"
					}, {
						id: 15,
						name: "Storm Crow Pants"
					}, {
						id: 16,
						name: "Black Dragon Pants"
					}, {
						id: 17,
						name: "Dark Phoenix Pants"
					}, {
						id: 18,
						name: "Grand Soul Pants"
					}, {
						id: 19,
						name: "Divine Pants"
					}, {
						id: 20,
						name: "Thunder Hawk Pants"
					}, {
						id: 21,
						name: "Great Dragon Pants"
					}, {
						id: 22,
						name: "Dark Soul Pants"
					}, {
						id: 23,
						name: "Hurricane Pants"
					}, {
						id: 24,
						name: "Red Spirit Pants"
					}, {
						id: 25,
						name: "Light Plate Pants"
					}, {
						id: 26,
						name: "Adamantine Pants"
					}, {
						id: 27,
						name: "Dark Steel Pants"
					}, {
						id: 28,
						name: "Dark Master Pants"
					}, {
						id: 29,
						name: "Dragon Knight Pants"
					}, {
						id: 30,
						name: "Venom Mist Pants"
					}, {
						id: 31,
						name: "Sylphid Ray Pants"
					}, {
						id: 32,
						name: "Volcano Pants"
					}, {
						id: 33,
						name: "Sunlight Pants"
					}, {
						id: 34,
						name: "Ashcrow Pants"
					}, {
						id: 35,
						name: "Eclipse Pants"
					}, {
						id: 36,
						name: "Iris Pants"
					}, {
						id: 37,
						name: "Valiant Pants"
					}, {
						id: 38,
						name: "Glorious Pants"
					}, {
						id: 39,
						name: "Violent Wind Pants"
					}, {
						id: 40,
						name: "Red Winged Pants"
					}, {
						id: 41,
						name: "Ancient Pants"
					}, {
						id: 42,
						name: "Demonic Pants"
					}, {
						id: 43,
						name: "Storm Blitz Pants"
					}, {
						id: 44,
						name: "Lilium Pants"
					}, {
						id: 53,
						name: "Queen Pants"
					}, {
						id: 45,
						name: "Titan Pants"
					}, {
						id: 46,
						name: "Brave Pants"
					}, {
						id: 47,
						name: "Phantom Pants"
					}, {
						id: 48,
						name: "Destruction Pants"
					}, {
						id: 49,
						name: "Seraphim Pants"
					}, {
						id: 50,
						name: "Faith Pants"
					}, {
						id: 51,
						name: "Royal Pants"
					}, {
						id: 52,
						name: "Hades Pants"
					}, {
						id: 59,
						name: "Sacred Fire Pants"
					}, {
						id: 60,
						name: "Storm Zahard Pants"
					}, {
						id: 61,
						name: "Piercing Grove Pants"
					}, {
						id: 73,
						name: "Phoenix Soul Pants"
					}]
				}, {
					groupId: 10,
					sectionId: 10,
					sectionName: "Gloves",
					items: [{
						id: 0,
						name: "Bronze Gloves"
					}, {
						id: 1,
						name: "Dragon Gloves"
					}, {
						id: 2,
						name: "Pad Gloves"
					}, {
						id: 3,
						name: "Legendary Gloves"
					}, {
						id: 4,
						name: "Bone Gloves"
					}, {
						id: 5,
						name: "Leather Gloves"
					}, {
						id: 6,
						name: "Scale Gloves"
					}, {
						id: 7,
						name: "Sphinx Gloves"
					}, {
						id: 8,
						name: "Brass Gloves"
					}, {
						id: 9,
						name: "Plate Gloves"
					}, {
						id: 10,
						name: "Vine Gloves"
					}, {
						id: 11,
						name: "Silk Gloves"
					}, {
						id: 12,
						name: "Wind Gloves"
					}, {
						id: 13,
						name: "Spirit Gloves"
					}, {
						id: 14,
						name: "Guardian Gloves"
					}, {
						id: 15,
						name: "Storm Crow Gloves"
					}, {
						id: 16,
						name: "Black Dragon Gloves"
					}, {
						id: 17,
						name: "Dark Phoenix Gloves"
					}, {
						id: 18,
						name: "Grand Soul Gloves"
					}, {
						id: 19,
						name: "Divine Gloves"
					}, {
						id: 20,
						name: "Thunder Hawk Gloves"
					}, {
						id: 21,
						name: "Great Dragon Gloves"
					}, {
						id: 22,
						name: "Dark Soul Gloves"
					}, {
						id: 23,
						name: "Hurricane Gloves"
					}, {
						id: 24,
						name: "Red Spirit Gloves"
					}, {
						id: 25,
						name: "Light Plate Gloves"
					}, {
						id: 26,
						name: "Adamantine Gloves"
					}, {
						id: 27,
						name: "Dark Steel Gloves"
					}, {
						id: 28,
						name: "Dark Master Gloves"
					}, {
						id: 29,
						name: "Dragon Knight Gloves"
					}, {
						id: 30,
						name: "Venom Mist Gloves"
					}, {
						id: 31,
						name: "Sylphid Ray Gloves"
					}, {
						id: 32,
						name: "Volcano Gloves"
					}, {
						id: 33,
						name: "Sunlight Gloves"
					}, {
						id: 34,
						name: "Ashcrow Gloves"
					}, {
						id: 35,
						name: "Eclipse Gloves"
					}, {
						id: 36,
						name: "Iris Gloves"
					}, {
						id: 37,
						name: "Valiant Gloves"
					}, {
						id: 38,
						name: "Glorious Gloves"
					}, {
						id: 39,
						name: "Violent Wind Gloves"
					}, {
						id: 40,
						name: "Red Winged Gloves"
					}, {
						id: 41,
						name: "Ancient Gloves"
					}, {
						id: 42,
						name: "Demonic Gloves"
					}, {
						id: 43,
						name: "Storm Blitz Gloves"
					}, {
						id: 44,
						name: "Lilium Gloves"
					}, {
						id: 53,
						name: "Queen Gloves"
					}, {
						id: 45,
						name: "Titan  Gloves"
					}, {
						id: 46,
						name: "Brave Gloves"
					}, {
						id: 47,
						name: "Phantom  Gloves"
					}, {
						id: 48,
						name: "Destruction Gloves"
					}, {
						id: 49,
						name: "Seraphim Gloves"
					}, {
						id: 50,
						name: "Faith Gloves"
					}, {
						id: 51,
						name: "Royal Gloves"
					}, {
						id: 52,
						name: "Hades Gloves"
					}]
				}, {
					groupId: 11,
					sectionId: 11,
					sectionName: "Boots",
					items: [{
						id: 0,
						name: "Bronze Boots"
					}, {
						id: 1,
						name: "Dragon Boots"
					}, {
						id: 2,
						name: "Pad Boots"
					}, {
						id: 3,
						name: "Legendary Boots"
					}, {
						id: 4,
						name: "Bone Boots"
					}, {
						id: 5,
						name: "Leather Boots"
					}, {
						id: 6,
						name: "Scale Boots"
					}, {
						id: 7,
						name: "Sphinx Boots"
					}, {
						id: 8,
						name: "Brass Boots"
					}, {
						id: 9,
						name: "Plate Boots"
					}, {
						id: 10,
						name: "Vine Boots"
					}, {
						id: 11,
						name: "Silk Boots"
					}, {
						id: 12,
						name: "Wind Boots"
					}, {
						id: 13,
						name: "Spirit Boots"
					}, {
						id: 14,
						name: "Guardian Boots"
					}, {
						id: 15,
						name: "Storm Crow Boots"
					}, {
						id: 16,
						name: "Black Dragon Boots"
					}, {
						id: 17,
						name: "Dark Phoenix Boots"
					}, {
						id: 18,
						name: "Grand Soul Boots"
					}, {
						id: 19,
						name: "Divine Boots"
					}, {
						id: 20,
						name: "Thunder Hawk Boots"
					}, {
						id: 21,
						name: "Great Dragon Boots"
					}, {
						id: 22,
						name: "Dark Soul Boots"
					}, {
						id: 23,
						name: "Hurricane Boots"
					}, {
						id: 24,
						name: "Red Spirit Boots"
					}, {
						id: 25,
						name: "Light Plate Boots"
					}, {
						id: 26,
						name: "Adamantine Boots"
					}, {
						id: 27,
						name: "Dark Steel Boots"
					}, {
						id: 28,
						name: "Dark Master Boots"
					}, {
						id: 29,
						name: "Dragon Knight Boots"
					}, {
						id: 30,
						name: "Venom Mist Boots"
					}, {
						id: 31,
						name: "Sylphid Ray Boots"
					}, {
						id: 32,
						name: "Volcano Boots"
					}, {
						id: 33,
						name: "Sunlight Boots"
					}, {
						id: 34,
						name: "Ashcrow Boots"
					}, {
						id: 35,
						name: "Eclipse Boots"
					}, {
						id: 36,
						name: "Iris Boots"
					}, {
						id: 37,
						name: "Valiant Boots"
					}, {
						id: 38,
						name: "Glorious Boots"
					}, {
						id: 39,
						name: "Violent Wind Boots"
					}, {
						id: 40,
						name: "Red Winged Boots"
					}, {
						id: 41,
						name: "Ancient Boots"
					}, {
						id: 42,
						name: "Demonic Boots"
					}, {
						id: 43,
						name: "Storm Blitz Boots"
					}, {
						id: 44,
						name: "Lilium Boots"
					}, {
						id: 53,
						name: "Queen Boots"
					}, {
						id: 45,
						name: "Titan Boots"
					}, {
						id: 46,
						name: "Brave Boots"
					}, {
						id: 47,
						name: "Phantom Boots"
					}, {
						id: 48,
						name: "Destruction Boots"
					}, {
						id: 49,
						name: "Seraphim Boots"
					}, {
						id: 50,
						name: "Faith Boots"
					}, {
						id: 51,
						name: "Royal Boots"
					}, {
						id: 52,
						name: "Hades Boots"
					}, {
						id: 59,
						name: "Sacred Fire Boots"
					}, {
						id: 60,
						name: "Storm Zahard Boots"
					}, {
						id: 61,
						name: "Piercing Grove Boots"
					}, {
						id: 73,
						name: "Phoenix Soul Boots"
					}]
				}, {
					groupId: 12,
					sectionId: 12,
					sectionName: "Small Wings",
					items: [{
						id: 130,
						name: "Small Cape of Lord"
					}, {
						id: 131,
						name: "Small Wings of Curse"
					}, {
						id: 132,
						name: "Small Wings of Elf"
					}, {
						id: 133,
						name: "Small Wings of Heaven"
					}, {
						id: 134,
						name: "Small Wings of Satan"
					}, {
						id: 135,
						name: "Small Cape of Fighter"
					}]
				}, {
					groupId: 13,
					sectionId: 12,
					sectionName: "Wings 1 LVL",
					items: [{
						id: 0,
						name: "Wings of Elf"
					}, {
						id: 1,
						name: "Wings of Heaven"
					}, {
						id: 2,
						name: "Wings of Satan"
					}]
				}, {
					groupId: 14,
					sectionId: 12,
					sectionName: "Wings 2 LVL",
					items: [{
						id: 3,
						name: "Wings of Spirits"
					}, {
						id: 4,
						name: "Wings of Soul"
					}, {
						id: 5,
						name: "Wings of Dragon"
					}, {
						id: 6,
						name: "Wings of Darkness"
					}, {
						id: 49,
						name: "Cape of Fighter"
					}]
				}, {
					groupId: 15,
					sectionId: 12,
					sectionName: "Wings 3 LVL",
					items: [{
						id: 36,
						name: "Wings of Storm"
					}, {
						id: 37,
						name: "Wings of Eternal"
					}, {
						id: 38,
						name: "Wings of Illusion"
					}, {
						id: 39,
						name: "Wings of Ruin"
					}, {
						id: 40,
						name: "Cape of Emperor"
					}, {
						id: 41,
						name: "Wings of Curse"
					}, {
						id: 42,
						name: "Wings of Despair"
					}, {
						id: 43,
						name: "Wings of Dimension"
					}, {
						id: 50,
						name: "Cape of Overrule"
					}]
				}, {
					groupId: 16,
					sectionId: 12,
					sectionName: "Wings 4 LVL",
					items: [{
						id: 200,
						name: "Wings of Elements"
					}, {
						id: 201,
						name: "Wings of Royal"
					}, {
						id: 202,
						name: "Cloak of Control"
					}, {
						id: 203,
						name: "Wings of Vortex"
					}, {
						id: 204,
						name: "Wings of Angel"
					}, {
						id: 205,
						name: "Wings of Butterfly"
					}, {
						id: 206,
						name: "Cloak of Referre"
					}]
				}, {
					groupId: 17,
					sectionId: 12,
					sectionName: "Orbs, Jewels, DL Scrolls, Crystals, Seeds",
					items: [{
						id: 7,
						name: "Orb of Twisting Slash"
					}, {
						id: 8,
						name: "Healing Orb"
					}, {
						id: 9,
						name: "Orb of Greater Defense"
					}, {
						id: 10,
						name: "Orb of Greater Damage"
					}, {
						id: 11,
						name: "Orb of Summoning"
					}, {
						id: 12,
						name: "Orb of Rageful Blow"
					}, {
						id: 13,
						name: "Orb of Impale"
					}, {
						id: 14,
						name: "Orb of Greater Fortitude"
					}, {
						id: 15,
						name: "Jewel of Chaos"
					}, {
						id: 16,
						name: "Orb of Fire Slash"
					}, {
						id: 17,
						name: "Orb of Penetration"
					}, {
						id: 18,
						name: "Orb of Ice Arrow"
					}, {
						id: 19,
						name: "Orb of Death Stab"
					}, {
						id: 21,
						name: "Scroll of Fire Burst"
					}, {
						id: 22,
						name: "Scroll of Summon"
					}, {
						id: 23,
						name: "Scroll of Critical Damage"
					}, {
						id: 24,
						name: "Scroll of Electric Spark"
					}, {
						id: 30,
						name: "Bundled Jewel of Bless"
					}, {
						id: 31,
						name: "Bundled Jewel of Soul"
					}, {
						id: 32,
						name: "Old Box 3"
					}, {
						id: 35,
						name: "Scroll of Fire Scream"
					}, {
						id: 44,
						name: "Crystal of Destruction"
					}, {
						id: 45,
						name: "Crystal of Multi-Shot"
					}, {
						id: 46,
						name: "Crystal of Recovery"
					}, {
						id: 47,
						name: "Crystal of Flame Strike"
					}, {
						id: 48,
						name: "Scroll of Chaotic Diseier"
					}, {
						id: 50,
						name: "Cape of Overrule"
					}, {
						id: 60,
						name: "Seed (Fire)"
					}, {
						id: 61,
						name: "Seed (Water)"
					}, {
						id: 62,
						name: "Seed (Ice)"
					}, {
						id: 63,
						name: "Seed (Wind)"
					}, {
						id: 64,
						name: "Seed (Lightning)"
					}, {
						id: 65,
						name: "Seed (Earth)"
					}, {
						id: 70,
						name: "Sphere (Mono)"
					}, {
						id: 71,
						name: "Sphere (Di)"
					}, {
						id: 72,
						name: "Sphere (Tri)"
					}, {
						id: 73,
						name: "Sphere (Qua)"
					}, {
						id: 74,
						name: "Sphere (Cin)"
					}, {
						id: 100,
						name: "Seed Sphere (Fire)"
					}, {
						id: 101,
						name: "Seed Sphere (Water)"
					}, {
						id: 102,
						name: "Seed Sphere (Ice)"
					}, {
						id: 103,
						name: "Seed Sphere (Wind)"
					}, {
						id: 104,
						name: "Seed Sphere (Lightning)"
					}, {
						id: 105,
						name: "Seed Sphere (Earth)"
					}, {
						id: 106,
						name: "Seed Sphere (Fire)"
					}, {
						id: 107,
						name: "Seed Sphere (Water)"
					}, {
						id: 108,
						name: "Seed Sphere (Ice)"
					}, {
						id: 109,
						name: "Seed Sphere (Wind)"
					}, {
						id: 110,
						name: "Seed Sphere (Lightning)"
					}, {
						id: 111,
						name: "Seed Sphere (Earth)"
					}, {
						id: 112,
						name: "Seed Sphere (Fire)"
					}, {
						id: 113,
						name: "Seed Sphere (Water)"
					}, {
						id: 114,
						name: "Seed Sphere (Ice)"
					}, {
						id: 115,
						name: "Seed Sphere (Wind)"
					}, {
						id: 116,
						name: "Seed Sphere (Lightning)"
					}, {
						id: 117,
						name: "Seed Sphere (Earth)"
					}, {
						id: 118,
						name: "Seed Sphere (Fire)"
					}, {
						id: 119,
						name: "Seed Sphere (Water)"
					}, {
						id: 120,
						name: "Seed Sphere (Ice)"
					}, {
						id: 121,
						name: "Seed Sphere (Wind)"
					}, {
						id: 122,
						name: "Seed Sphere (Lightning)"
					}, {
						id: 123,
						name: "Seed Sphere (Earth)"
					}, {
						id: 124,
						name: "Seed Sphere (Fire)"
					}, {
						id: 125,
						name: "Seed Sphere (Water)"
					}, {
						id: 126,
						name: "Seed Sphere (Ice)"
					}, {
						id: 127,
						name: "Seed Sphere (Wind)"
					}, {
						id: 128,
						name: "Seed Sphere (Lightning)"
					}, {
						id: 129,
						name: "Seed Sphere (Earth)"
					}, {
						id: 136,
						name: "Bundled Jewel of Life"
					}, {
						id: 137,
						name: "Bundled Jewel of Creation"
					}, {
						id: 138,
						name: "Bundled Jewel of Guardian"
					}, {
						id: 139,
						name: "Bundled Gemstone"
					}, {
						id: 140,
						name: "Bundled Jewel of Harmony"
					}, {
						id: 141,
						name: "Bundled Jewel of Chaos"
					}, {
						id: 142,
						name: "Bundled Lower Refining Stone"
					}, {
						id: 143,
						name: "Bundled Higer Refining Stone"
					}]
				}, {
					groupId: 18,
					sectionId: 13,
					sectionName: "Rings that can be EXC",
					items: [{
						id: 8,
						name: "Ring of Ice"
					}, {
						id: 9,
						name: "Ring of Poison"
					}, {
						id: 21,
						name: "Ring of Fire"
					}, {
						id: 22,
						name: "Ring of Earth"
					}, {
						id: 23,
						name: "Ring of Wind"
					}, {
						id: 24,
						name: "Ring of Magic"
					}]
				}, {
					groupId: 19,
					sectionId: 13,
					sectionName: "Pendants that can be EXC",
					items: [{
						id: 12,
						name: "Pendant of Lighting"
					}, {
						id: 13,
						name: "Pendant of Fire"
					}, {
						id: 25,
						name: "Pendant of Ice"
					}, {
						id: 26,
						name: "Pendant of Wind"
					}, {
						id: 27,
						name: "Pendant of Water"
					}, {
						id: 28,
						name: "Pendant of Ability"
					}]
				}, {
					groupId: 20,
					sectionId: 13,
					sectionName: "Other 1",
					items: [{
						id: 0,
						name: "Guardian Angel"
					}, {
						id: 1,
						name: "Imp"
					}, {
						id: 2,
						name: "Horn of Uniria"
					}, {
						id: 3,
						name: "Horn of Dinorant"
					}, {
						id: 4,
						name: "Dark Horse"
					}, {
						id: 5,
						name: "Dark Raven"
					}, {
						id: 10,
						name: "Transformation Ring"
					}, {
						id: 14,
						name: "Loch's Feather"
					}, {
						id: 15,
						name: "Energy Fruit"
					}, {
						id: 16,
						name: "Scroll of Archangel"
					}, {
						id: 17,
						name: "Blood Bone"
					}, {
						id: 18,
						name: "Invisibility Cloak"
					}, {
						id: 20,
						name: "Wizard's Ring"
					}, {
						id: 29,
						name: "Armor of Guardsman"
					}, {
						id: 31,
						name: "Dark Horse Spirit"
					}, {
						id: 32,
						name: "Splinter of Armor"
					}, {
						id: 33,
						name: "Bless of Guardian"
					}, {
						id: 34,
						name: "Claw of Beast"
					}, {
						id: 35,
						name: "Fragment of Horn"
					}, {
						id: 36,
						name: "Broken Horn"
					}, {
						id: 37,
						name: "Horn of Fenrir"
					}, {
						id: 38,
						name: "Moonstone Pendant"
					}, {
						id: 39,
						name: "Eilte Transfer Skeleton Ring"
					}, {
						id: 40,
						name: "Jack Olantern Ring"
					}, {
						id: 41,
						name: "Transfer Christmas Ring"
					}, {
						id: 46,
						name: "Devil Square Ticket"
					}, {
						id: 47,
						name: "Blood Castle Ticket"
					}, {
						id: 48,
						name: "Kalima Ticket"
					}, {
						id: 49,
						name: "Old Scroll"
					}, {
						id: 50,
						name: "Illusion Sorcerer's Covenant"
					}, {
						id: 51,
						name: "Scroll of Blood"
					}, {
						id: 52,
						name: "Condor Flame"
					}, {
						id: 53,
						name: "Condor Feather"
					}, {
						id: 54,
						name: "Reset Fruit Strength"
					}, {
						id: 55,
						name: "Reset Fruit Agility"
					}, {
						id: 56,
						name: "Reset Fruit Vitality"
					}, {
						id: 57,
						name: "Reset Fruit Energy"
					}, {
						id: 58,
						name: "Reset Fruit Command"
					}, {
						id: 61,
						name: "Illusion Temple Ticket"
					}, {
						id: 64,
						name: "Demon"
					}, {
						id: 65,
						name: "Spirit of Guardian"
					}, {
						id: 68,
						name: "Snowman Transformation Ring"
					}, {
						id: 104,
						name: "Max AG Boost Aura"
					}, {
						id: 105,
						name: "Max SD Boost Aura"
					}, {
						id: 107,
						name: "Lethal Wizard's Ring"
					}, {
						id: 109,
						name: "Sapphire Ring"
					}, {
						id: 110,
						name: "Ruby Ring"
					}, {
						id: 111,
						name: "Topaz Ring"
					}, {
						id: 112,
						name: "Amethyst Ring"
					}, {
						id: 113,
						name: "Ruby Necklace"
					}, {
						id: 114,
						name: "Emerald Necklace"
					}, {
						id: 115,
						name: "Sapphire Necklace"
					}, {
						id: 117,
						name: "Minimum Vitality Potion"
					}, {
						id: 118,
						name: "Low Vitality Potion"
					}, {
						id: 119,
						name: "Medium Vitality Potion"
					}, {
						id: 120,
						name: "High Vitality Potion"
					}, {
						id: 122,
						name: "Skeleton Transformation Ring"
					}, {
						id: 128,
						name: "Hawk Figurine"
					}, {
						id: 129,
						name: "Goat Figurine"
					}, {
						id: 130,
						name: "Oak Charm"
					}]
				}, {
					groupId: 21,
					sectionId: 14,
					sectionName: "Other 2",
					items: [{
						id: 0,
						name: "Apple"
					}, {
						id: 1,
						name: "Small Healing Potion"
					}, {
						id: 2,
						name: "Healing Potion"
					}, {
						id: 3,
						name: "Large Healing Potion"
					}, {
						id: 4,
						name: "Small Mana Potion"
					}, {
						id: 5,
						name: "Mana Potion"
					}, {
						id: 6,
						name: "Large Mana Potion"
					}, {
						id: 7,
						name: "Potion of Bless"
					}, {
						id: 8,
						name: "Antidote"
					}, {
						id: 9,
						name: "Ale"
					}, {
						id: 10,
						name: "Town Portal Scroll"
					}, {
						id: 11,
						name: "Box of Luck"
					}, {
						id: 12,
						name: "Heart"
					}, {
						id: 13,
						name: "Jewel of Bless"
					}, {
						id: 14,
						name: "Jewel of Soul"
					}, {
						id: 16,
						name: "Jewel of Life"
					}, {
						id: 17,
						name: "Devil's Eye"
					}, {
						id: 18,
						name: "Devil's name"
					}, {
						id: 19,
						name: "Devil Square Invitation"
					}, {
						id: 20,
						name: "Remedy of Love"
					}, {
						id: 21,
						name: "Rena"
					}, {
						id: 22,
						name: "Jewel of Creation"
					}, {
						id: 23,
						name: "Scroll of Emperor"
					}, {
						id: 24,
						name: "Broken Sword"
					}, {
						id: 25,
						name: "Tear of Elf"
					}, {
						id: 26,
						name: "Soul of Wizard"
					}, {
						id: 28,
						name: "Lost Map"
					}, {
						id: 29,
						name: "Symbol of Kundun"
					}, {
						id: 31,
						name: "Jewel of Guardian"
					}, {
						id: 32,
						name: "Old Box 1"
					}, {
						id: 33,
						name: "Red Chocolate Box"
					}, {
						id: 34,
						name: "Old Box 2"
					}, {
						id: 35,
						name: "Small SD Potion"
					}, {
						id: 36,
						name: "SD Potion"
					}, {
						id: 37,
						name: "Large SD Potion"
					}, {
						id: 38,
						name: "Small Complex Potion"
					}, {
						id: 39,
						name: "Complex Potion"
					}, {
						id: 40,
						name: "Large Complex Potion"
					}, {
						id: 41,
						name: "Gemstone"
					}, {
						id: 42,
						name: "Jewel of Harmony"
					}, {
						id: 43,
						name: "Lower Refining Stone"
					}, {
						id: 44,
						name: "Higher Refining Stone"
					}, {
						id: 45,
						name: "Pumpkin of Luck"
					}, {
						id: 46,
						name: "Jack O'Lantern Blessings"
					}, {
						id: 47,
						name: "Jack O'Lantern Wrath"
					}, {
						id: 48,
						name: "Jack O'Lantern Cry"
					}, {
						id: 49,
						name: "Jack O'Lantern Food"
					}, {
						id: 50,
						name: "Jack O'Lantern Drink"
					}, {
						id: 51,
						name: "Chistmas Star"
					}, {
						id: 53,
						name: "Talisman of Luck"
					}, {
						id: 54,
						name: "Chaos Card"
					}, {
						id: 55,
						name: "Old Box 5"
					}, {
						id: 56,
						name: "Red Chaos Box"
					}, {
						id: 57,
						name: "Old Box 4"
					}, {
						id: 63,
						name: "Firecracker"
					}, {
						id: 64,
						name: "Cursed Castle Water"
					}, {
						id: 65,
						name: "Flame of Death-Beam Knight"
					}, {
						id: 66,
						name: "Horn of Hell Maine"
					}, {
						id: 67,
						name: "Feather of Phoenix"
					}, {
						id: 68,
						name: "Abyssal Eye"
					}, {
						id: 70,
						name: "Elite Healing Potion"
					}, {
						id: 71,
						name: "Elite Mana Potion"
					}, {
						id: 72,
						name: "Scroll of Quickness"
					}, {
						id: 73,
						name: "Scroll of Defense"
					}, {
						id: 74,
						name: "Scroll of Wrath"
					}, {
						id: 75,
						name: "Scroll of Wizardry"
					}, {
						id: 76,
						name: "Scroll of Health"
					}, {
						id: 77,
						name: "Scroll of Mana"
					}, {
						id: 78,
						name: "Elixir of Strength"
					}, {
						id: 79,
						name: "Elixir of Agility"
					}, {
						id: 80,
						name: "Elixir of Vitality"
					}, {
						id: 81,
						name: "Elixir of Energy"
					}, {
						id: 82,
						name: "Elixir of Command"
					}, {
						id: 83,
						name: "Rare Item Ticket"
					}, {
						id: 84,
						name: "Cherry Blossom Play-Box"
					}, {
						id: 85,
						name: "Cherry Blossom Wine"
					}, {
						id: 86,
						name: "Cherry Blossom Rice Cake"
					}, {
						id: 87,
						name: "Cherry Blossom Flower Petal"
					}, {
						id: 88,
						name: "White Cherry Blossom Branch"
					}, {
						id: 89,
						name: "Red Cherry Blossom Branch"
					}, {
						id: 90,
						name: "Golden Cherry Blossom Branc"
					}, {
						id: 91,
						name: "Summoner Character Card"
					}, {
						id: 92,
						name: "Chaos Card Gold"
					}, {
						id: 93,
						name: "Chaos Card Rare"
					}, {
						id: 94,
						name: "Medium Elite Healing Potion"
					}, {
						id: 95,
						name: "Chaos Card  Mini"
					}, {
						id: 96,
						name: "Talisman of Chaos Assembly"
					}, {
						id: 97,
						name: "Scroll of Battle"
					}, {
						id: 98,
						name: "Scroll of Strength"
					}, {
						id: 99,
						name: "Christmas Firecracker"
					}, {
						id: 100,
						name: "Lucky Coin"
					}, {
						id: 101,
						name: "Suspicious Scrap of Paper"
					}, {
						id: 102,
						name: "Gaion's Order"
					}, {
						id: 103,
						name: "First Secromicon Fragment"
					}, {
						id: 104,
						name: "Second Secromicon Fragment"
					}, {
						id: 105,
						name: "Third Secromicon Fragment"
					}, {
						id: 106,
						name: "Fourth Secromicon Fragment"
					}, {
						id: 107,
						name: "Fifth Secromicon Fragment"
					}, {
						id: 108,
						name: "Sixth Secromicon Fragment"
					}, {
						id: 109,
						name: "Complete Secromicon"
					}, {
						id: 110,
						name: "Sign of Dimensions"
					}, {
						id: 111,
						name: "Mirror of Dimensions"
					}, {
						id: 133,
						name: "Elite SD Potion"
					}, {
						id: 141,
						name: "Shining Jewelry Case"
					}, {
						id: 142,
						name: "Elegant Jewelry Case"
					}, {
						id: 143,
						name: "Steel Jewelry Case"
					}, {
						id: 144,
						name: "Old Jewelry Case"
					}, {
						id: 162,
						name: "Magic Backpack"
					}]
				}, {
					groupId: 22,
					sectionId: 15,
					sectionName: "Scroll and Parchments",
					items: [{
						id: 0,
						name: "Scroll of Poison"
					}, {
						id: 1,
						name: "Scroll of Meteorite"
					}, {
						id: 2,
						name: "Scroll of Lighting"
					}, {
						id: 3,
						name: "Scroll of Fire Ball"
					}, {
						id: 4,
						name: "Scroll of Flame"
					}, {
						id: 5,
						name: "Scroll of Teleport"
					}, {
						id: 6,
						name: "Scroll of Ice"
					}, {
						id: 7,
						name: "Scroll of Twister"
					}, {
						id: 8,
						name: "Scroll of Evil Spirits"
					}, {
						id: 9,
						name: "Scroll of Hellfire"
					}, {
						id: 10,
						name: "Scroll of Power Wave"
					}, {
						id: 11,
						name: "Scroll of Aqua Beam"
					}, {
						id: 12,
						name: "Scroll of Cometfall"
					}, {
						id: 13,
						name: "Scroll of Inferno"
					}, {
						id: 14,
						name: "Scroll of Teleport Ally"
					}, {
						id: 15,
						name: "Scroll of Soul Barrier"
					}, {
						id: 16,
						name: "Scroll of Decay"
					}, {
						id: 17,
						name: "Scroll of Ice Storm"
					}, {
						id: 18,
						name: "Scroll of Nova"
					}, {
						id: 19,
						name: "Chain Lightning Parchment"
					}, {
						id: 20,
						name: "Drain Life Parchment"
					}, {
						id: 21,
						name: "Lightning Shock Parchment"
					}, {
						id: 22,
						name: "Damage Reflection Parchment"
					}, {
						id: 23,
						name: "Berserker Parchment"
					}, {
						id: 24,
						name: "Sleep Parchment"
					}, {
						id: 26,
						name: "Weakness Parchment"
					}, {
						id: 27,
						name: "Innovation Parchment"
					}, {
						id: 28,
						name: "Scroll of Wizardry Enhance"
					}, {
						id: 29,
						name: "Scroll of Gigantic Storm"
					}, {
						id: 30,
						name: "Chain Drive Parchment"
					}, {
						id: 31,
						name: "Dark Side Parchment"
					}, {
						id: 32,
						name: "Dragon Roar Parchment"
					}, {
						id: 33,
						name: "Dragon Slasher Parchment"
					}, {
						id: 34,
						name: "Ignore Defense Parchment"
					}, {
						id: 35,
						name: "Increase Health Parchment"
					}, {
						id: 36,
						name: "Increase Block Parchment"
					}]
				}, {
					groupId: 23,
					sectionId: 13,
					sectionName: "Wings 2 LVL (DL, RF)",
					items: [{
						id: 30,
						name: "Cape of Lord"
					}]
				}],
				Ce = a("Ac47"),
				Oe = d.a.createElement;

			function Be(e, n) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					n && (i = i.filter((function(n) {
						return Object.getOwnPropertyDescriptor(e, n).enumerable
					}))), a.push.apply(a, i)
				}
				return a
			}

			function ke(e) {
				for (var n = 1; n < arguments.length; n++) {
					var a = null != arguments[n] ? arguments[n] : {};
					n % 2 ? Be(Object(a), !0).forEach((function(n) {
						Object(r.a)(e, n, a[n])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Be(Object(a)).forEach((function(n) {
						Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n))
					}))
				}
				return e
			}
			var we = {
					section: void 0,
					type: void 0,
					level: 0,
					option: 0,
					hasSkill: !1,
					hasLuck: !1,
					isExcellent: !1,
					excOptions: []
				},
				Pe = function(e, n) {
					switch (console.log("ACTION: ", n.type), n.type) {
						case "SET_SECTION":
							return ke(ke({}, e), {}, {
								section: n.payload,
								isExcellent: !1,
								excOptions: []
							});
						case "SET_TYPE":
							return ke(ke({}, e), {}, {
								type: n.payload,
								isExcellent: !1,
								excOptions: []
							});
						case "SET_LEVEL":
							return ke(ke({}, e), {}, {
								level: n.payload
							});
						case "SET_OPTION":
							return ke(ke({}, e), {}, {
								option: n.payload
							});
						case "TOGGLE_HAS_SKILL":
							return ke(ke({}, e), {}, {
								hasSkill: !e.hasSkill
							});
						case "TOGGLE_HAS_LUCK":
							return ke(ke({}, e), {}, {
								hasLuck: !e.hasLuck
							});
						case "TOGGLE_IS_EXC":
							return ke(ke({}, e), {}, {
								isExcellent: !e.isExcellent
							});
						case "SET_EXC_OPTS":
							return ke(ke({}, e), {}, {
								excOptions: n.payload
							})
					}
				};
			n.default = function() {
				var e, n, a, i, r = Object(m.b)().colorMode,
					d = Object(t.useReducer)(Pe, we),
					l = d[0],
					s = l.section,
					f = l.type,
					h = l.level,
					p = l.option,
					S = l.hasSkill,
					g = l.hasLuck,
					v = l.isExcellent,
					y = l.excOptions,
					C = d[1],
					O = function(e) {
						C({
							type: "SET_EXC_OPTS",
							payload: e.filter((function(e) {
								return "63" !== e
							})).map((function(e) {
								return String(e)
							}))
						})
					},
					B = y.includes("63") ? 63 : y.reduce((function(e, n) {
						return Number(n) + e
					}), 0),
					k = null === (e = ye.find((function(e) {
						return e.items.find((function(n) {
							return n.id === f && s === e.groupId
						}))
					}))) || void 0 === e ? void 0 : e.sectionId,
					w = void 0 !== s && void 0 !== f ? ["/make", k, f, h, S ? 1 : 0, g ? 1 : 0, p ? p / 4 : 0, B].join(" ") : "Select item first",
					P = c("Select item first" === w ? "/hustle" : w),
					D = P.onCopy,
					A = P.hasCopied,
					x = void 0 !== s && void 0 !== f && [0, 1, 2, 3, 4, 5, 6].includes(s),
					I = 19 === (null === (n = ye.find((function(e) {
						return e.items.find((function(n) {
							return n.id === f && s === e.groupId
						}))
					}))) || void 0 === n ? void 0 : n.groupId),
					j = 18 === (null === (a = ye.find((function(e) {
						return e.items.find((function(n) {
							return n.id === f && s === e.groupId
						}))
					}))) || void 0 === a ? void 0 : a.groupId),
					E = 14 === (null === (i = ye.find((function(e) {
						return e.items.find((function(n) {
							return n.id === f && s === e.groupId
						}))
					}))) || void 0 === i ? void 0 : i.groupId),
					G = void 0 !== s && void 0 !== f && ([0, 1, 2, 3, 4, 5].includes(s) || I),
					R = void 0 !== s && void 0 !== f && ([6, 7, 8, 9, 10, 11].includes(s) || j);
				return Oe(Ce.a, null, Oe(N.a, {
					fontSize: "3xl",
					mb: 5
				}, "Your item: ", Oe("b", null)), Oe(N.a, null, "Command to paste in game:"), Oe(z.a, {
					mb: 5
				}, Oe(te, {
					value: w,
					variant: "filled",
					isReadOnly: !0,
					placeholder: "Command",
					bg: "light" === r ? "#EDF2F7 !important" : "rgba(255,255,255,0.06) !important"
				}), Oe(u.a, {
					bg: "violet",
					color: "#fff",
					onClick: D,
					ml: 2
				}, A ? "Copied" : "Copy")), Oe(b.a, {
					bg: "light" === r ? "#F4F4FE" : "#1A202C"
				}, Oe(z.a, {
					m: -3
				}, Oe(b.a, {
					flex: 1,
					m: 3
				}, Oe(N.a, null, "Item Type"), Oe(fe, {
					color: "#000",
					value: s,
					placeholder: "Select item type",
					onChange: function(e) {
						return C({
							type: "SET_SECTION",
							payload: Number(e.target.value)
						})
					}
				}, ye.map((function(e) {
					var n = e.groupId,
						a = e.sectionName;
					return Oe("option", {
						key: n,
						value: n
					}, a)
				})))), Oe(b.a, {
					flex: 1,
					m: 3
				}, Oe(N.a, null, "Item Name"), Oe(fe, {
					value: f,
					color: "#000",
					placeholder: "Select item",
					isDisabled: void 0 === s,
					onChange: function(e) {
						return C({
							type: "SET_TYPE",
							payload: Number(e.target.value)
						})
					}
				}, void 0 !== s && ye[s] && ye[s].items.map((function(e) {
					var n = e.id,
						a = e.name;
					return Oe("option", {
						key: n,
						value: n
					}, a)
				}))))), Oe(z.a, {
					m: -3
				}, Oe(b.a, {
					flex: 1,
					m: 3
				}, Oe(N.a, null, "Item Level (max is +15)"), Oe(fe, {
					value: h,
					placeholder: "Select item level",
					isDisabled: void 0 === s || void 0 === f,
					onChange: function(e) {
						return C({
							type: "SET_LEVEL",
							payload: Number(e.target.value)
						})
					}
				}, o(Array(16).keys()).map((function(e) {
					return Oe("option", {
						key: e,
						value: e
					}, e)
				})))), Oe(b.a, {
					flex: 1,
					m: 3
				}, Oe(N.a, null, "Item Option (max is +28)"), Oe(fe, {
					value: p,
					placeholder: "Select item option",
					isDisabled: void 0 === s || void 0 === f,
					onChange: function(e) {
						return C({
							type: "SET_OPTION",
							payload: Number(e.target.value)
						})
					}
				}, [0, 4, 8, 12, 16, 20, 24, 28].map((function(e) {
					return Oe("option", {
						key: e,
						value: e
					}, e ? "+".concat(e) : "no additional option")
				}))))), Oe(z.a, {
					align: "center",
					mt: 5
				}, Oe(Se, {
					id: "skill",
					isChecked: !!x && S,
					isDisabled: !x,
					onChange: function() {
						return C({
							type: "TOGGLE_HAS_SKILL"
						})
					}
				}), Oe(ve, {
					htmlFor: "skill",
					pl: 3
				}, "skill")), Oe(z.a, {
					align: "center"
				}, Oe(Se, {
					id: "luck",
					isChecked: void 0 !== s && void 0 !== f && g,
					isDisabled: void 0 === s || void 0 === f,
					onChange: function() {
						return C({
							type: "TOGGLE_HAS_LUCK"
						})
					}
				}), Oe(ve, {
					htmlFor: "luck",
					pl: 3
				}, "luck")), Oe(z.a, {
					align: "center"
				}, Oe(Se, {
					isChecked: void 0 !== s && void 0 !== f && v,
					id: "excellent",
					isDisabled: void 0 === s || void 0 === f || !G && !R && !E,
					onChange: function() {
						return C({
							type: "TOGGLE_IS_EXC"
						})
					}
				}), Oe(ve, {
					htmlFor: "excellent",
					pl: 3
				}, "is excellent?")), v && Oe(b.a, {
					m: 3,
					pl: 3,
					borderLeft: "2px solid #ddd"
				}, (G || R || E) && Oe(L, {
					value: "63",
					isChecked: y.includes("63"),
					isIndeterminate: y.length > 0 && !y.includes("63"),
					onChange: function(e) {
						y.includes(e.target.value) ? C({
							type: "SET_EXC_OPTS",
							payload: []
						}) : C({
							type: "SET_EXC_OPTS",
							payload: [e.target.value].concat(["1", "2", "4", "8", "16", "32"])
						})
					}
				}, "All the above listed options"), G && Oe(M, {
					value: y,
					onChange: O
				}, Oe(L, {
					value: "1"
				}, "Mana recovery after monster hunt +mana/8"), Oe(L, {
					value: "2"
				}, "Health recovery after monster hunt +HP/8"), Oe(L, {
					value: "4"
				}, "+7 Speed"), Oe(L, {
					value: "8"
				}, "More damage +2%"), Oe(L, {
					value: "16"
				}, "More damage +level/20"), Oe(L, {
					value: "32"
				}, "Excellent damage rate +10%")), R && Oe(M, {
					value: y,
					onChange: O
				}, Oe(L, {
					value: "1"
				}, "Increases Zen after Hunting monster +40%"), Oe(L, {
					value: "2"
				}, "Defence success rate +10%"), Oe(L, {
					value: "4"
				}, "Reflect damage +5%"), Oe(L, {
					value: "8"
				}, "Damage decrease +4%"), Oe(L, {
					value: "16"
				}, "Increase Max mana +4%"), Oe(L, {
					value: "32"
				}, "Increase Max HP +4%")), E && Oe(M, {
					value: y,
					onChange: O
				}, Oe(L, {
					value: "1"
				}, "HP"), Oe(L, {
					value: "2"
				}, "Mana"), Oe(L, {
					value: "4"
				}, "Ignore"), Oe(L, {
					value: "8"
				}, "AG"), Oe(L, {
					value: "16"
				}, "Speed")))))
			}
		},
		rePB: function(e, n, a) {
			"use strict";

			function i(e, n, a) {
				return n in e ? Object.defineProperty(e, n, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[n] = a, e
			}
			a.d(n, "a", (function() {
				return i
			}))
		}
	},
	[
		["/EDR", 1, 2, 0, 3, 4]
	]
]);
//# sourceMappingURL=index-a591b0c8aa9765265974.js.map